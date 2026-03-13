import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CropPriceTrendComponent } from './crop-price-trend.component';
import { DemandSupplyChartComponent } from './demand-supply-chart.component';
import { MandiDashboardData } from './mandi-dashboard.models';
import { MarketComparisonComponent } from './market-comparison.component';
import { PriceSummaryCardsComponent } from './price-summary-cards.component';
import { TopCropsComponent } from './top-crops.component';

@Component({
  selector: 'app-mandi-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    PriceSummaryCardsComponent,
    CropPriceTrendComponent,
    MarketComparisonComponent,
    DemandSupplyChartComponent,
    TopCropsComponent
  ],
  templateUrl: './mandi-dashboard.component.html',
  styleUrl: './mandi-dashboard.component.css'
})
export class MandiDashboardComponent {
  @Input() dashboard: MandiDashboardData | null = null;
  @Input() loading = false;

  get hasData(): boolean {
    if (!this.dashboard) {
      return false;
    }

    return this.dashboard.priceTrend.length > 0 || this.dashboard.marketComparison.length > 0;
  }

  get demandIndicator(): string {
    return this.dashboard?.kpis.find((item) => item.label === 'Market Demand Indicator')?.value || 'Balanced';
  }
}
