import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CropPriceTrendComponent } from './crop-price-trend.component';
import { DemandSupplyChartComponent } from './demand-supply-chart.component';
import { MandiDashboardData } from './mandi-dashboard.models';
import { MarketInsightsComponent } from './market-insights.component';
import { MarketComparisonComponent } from './market-comparison.component';
import { PriceSummaryCardsComponent } from './price-summary-cards.component';
import { TopCropsComponent } from './top-crops.component';

@Component({
  selector: 'app-mandi-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    PriceSummaryCardsComponent,
    CropPriceTrendComponent,
    MarketComparisonComponent,
    DemandSupplyChartComponent,
    TopCropsComponent,
    MarketInsightsComponent
  ],
  templateUrl: './mandi-dashboard.component.html',
  styleUrl: './mandi-dashboard.component.css'
})
export class MandiDashboardComponent {
  @Input() dashboard: MandiDashboardData | null = null;
  @Input() loading = false;

  activeTab: 'overview' | 'trend' | 'markets' | 'demand' | 'crops' | 'insights' = 'overview';

  readonly tabs: Array<{ id: 'overview' | 'trend' | 'markets' | 'demand' | 'crops' | 'insights'; labelKey: string }> = [
    { id: 'overview', labelKey: 'MANDI_TABS.OVERVIEW' },
    { id: 'trend', labelKey: 'MANDI_TABS.PRICE_TREND' },
    { id: 'markets', labelKey: 'MANDI_TABS.MARKET_COMPARISON' },
    { id: 'demand', labelKey: 'MANDI_TABS.SUPPLY_DEMAND' },
    { id: 'crops', labelKey: 'MANDI_TABS.TOP_CROPS' },
    { id: 'insights', labelKey: 'MANDI_TABS.ADDITIONAL_INSIGHTS' }
  ];

  get hasData(): boolean {
    if (!this.dashboard) {
      return false;
    }

    return this.dashboard.priceTrend.length > 0 || this.dashboard.marketComparison.length > 0;
  }

  get demandIndicator(): string {
    return this.dashboard?.kpis.find((item) => item.label === 'Market Demand Indicator')?.value || 'Balanced';
  }

  setActiveTab(tab: 'overview' | 'trend' | 'markets' | 'demand' | 'crops' | 'insights'): void {
    this.activeTab = tab;
  }
}
