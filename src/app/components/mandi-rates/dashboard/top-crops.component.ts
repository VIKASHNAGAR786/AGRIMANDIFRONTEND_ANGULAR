import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CropDistributionItem, CropPriceTag, TopCropItem } from './mandi-dashboard.models';

@Component({
  selector: 'app-top-crops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-crops.component.html',
  styleUrl: './top-crops.component.css'
})
export class TopCropsComponent {
  @Input() topCrops: TopCropItem[] = [];
  @Input() distribution: CropDistributionItem[] = [];
  @Input() highest: CropPriceTag | null = null;
  @Input() lowest: CropPriceTag | null = null;

  get pieStyle(): string {
    if (this.distribution.length === 0) {
      return 'conic-gradient(#d4d4d8 0 100%)';
    }

    const palette = ['#16a34a', '#0d9488', '#2563eb', '#f59e0b', '#dc2626', '#7c3aed'];
    let from = 0;
    const slices = this.distribution.map((item, index) => {
      const to = from + item.share;
      const color = palette[index % palette.length];
      const segment = `${color} ${from}% ${to}%`;
      from = to;
      return segment;
    });

    return `conic-gradient(${slices.join(', ')})`;
  }
}
