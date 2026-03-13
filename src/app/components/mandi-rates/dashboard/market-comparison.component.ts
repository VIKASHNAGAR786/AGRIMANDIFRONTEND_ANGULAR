import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MarketComparisonItem } from './mandi-dashboard.models';

@Component({
  selector: 'app-market-comparison',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-comparison.component.html',
  styleUrl: './market-comparison.component.css'
})
export class MarketComparisonComponent {
  @Input() markets: MarketComparisonItem[] = [];

  maxPrice(): number {
    return Math.max(...this.markets.map((item) => item.avgPrice), 1);
  }

  widthPercent(price: number): number {
    return (price / this.maxPrice()) * 100;
  }
}
