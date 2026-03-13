import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DemandSupplyItem } from './mandi-dashboard.models';

@Component({
  selector: 'app-demand-supply-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demand-supply-chart.component.html',
  styleUrl: './demand-supply-chart.component.css'
})
export class DemandSupplyChartComponent {
  @Input() items: DemandSupplyItem[] = [];
  @Input() indicator = 'Balanced';

  maxScale(): number {
    const allValues = this.items.flatMap((item) => [item.supply, item.demand]);
    return Math.max(...allValues, 1);
  }

  width(value: number): number {
    return (value / this.maxScale()) * 100;
  }
}
