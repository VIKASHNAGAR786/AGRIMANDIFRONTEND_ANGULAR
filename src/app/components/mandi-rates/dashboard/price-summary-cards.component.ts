import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CropWindowAverage, KpiCard } from './mandi-dashboard.models';

@Component({
  selector: 'app-price-summary-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-summary-cards.component.html',
  styleUrl: './price-summary-cards.component.css'
})
export class PriceSummaryCardsComponent {
  @Input() kpis: KpiCard[] = [];
  @Input() windowAverages: CropWindowAverage[] = [];
}
