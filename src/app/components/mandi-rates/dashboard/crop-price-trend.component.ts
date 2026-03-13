import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PriceTrendPoint } from './mandi-dashboard.models';

@Component({
  selector: 'app-crop-price-trend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crop-price-trend.component.html',
  styleUrl: './crop-price-trend.component.css'
})
export class CropPriceTrendComponent {
  @Input() points: PriceTrendPoint[] = [];

  readonly width = 720;
  readonly height = 280;
  readonly padding = 36;

  get polylinePoints(): string {
    if (this.points.length === 0) {
      return '';
    }

    const max = Math.max(...this.points.map((item) => item.value));
    const min = Math.min(...this.points.map((item) => item.value));
    const range = Math.max(max - min, 1);
    const step = this.points.length > 1 ? (this.width - this.padding * 2) / (this.points.length - 1) : 0;

    return this.points
      .map((point, index) => {
        const x = this.padding + index * step;
        const y = this.height - this.padding - ((point.value - min) / range) * (this.height - this.padding * 2);
        return `${x},${y}`;
      })
      .join(' ');
  }

  get areaPoints(): string {
    if (!this.polylinePoints) {
      return '';
    }

    const firstX = this.padding;
    const lastX = this.points.length > 1 ? this.width - this.padding : this.padding;
    const baseY = this.height - this.padding;

    return `${firstX},${baseY} ${this.polylinePoints} ${lastX},${baseY}`;
  }

  pointPosition(index: number): { left: string; top: string } {
    const max = Math.max(...this.points.map((item) => item.value), 1);
    const min = Math.min(...this.points.map((item) => item.value), 0);
    const range = Math.max(max - min, 1);
    const step = this.points.length > 1 ? (100 - 10) / (this.points.length - 1) : 0;

    const left = 5 + index * step;
    const top = 90 - ((this.points[index].value - min) / range) * 80;

    return { left: `${left}%`, top: `${top}%` };
  }
}
