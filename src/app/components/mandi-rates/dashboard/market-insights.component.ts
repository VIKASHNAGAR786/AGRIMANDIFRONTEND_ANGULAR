import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ArrivalPriceInsight,
  DailyPriceChangeItem,
  DistrictHeatmapItem,
  PriceStabilityItem,
  WeeklyMovementItem,
  BestMandiItem
} from './mandi-dashboard.models';

@Component({
  selector: 'app-market-insights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-insights.component.html',
  styleUrl: './market-insights.component.css'
})
export class MarketInsightsComponent {
  @Input() dailyPriceChanges: DailyPriceChangeItem[] = [];
  @Input() bestMandis: BestMandiItem[] = [];
  @Input() districtHeatmap: DistrictHeatmapItem[] = [];
  @Input() priceStability: PriceStabilityItem[] = [];
  @Input() weeklyMovement: WeeklyMovementItem[] = [];
  @Input() arrivalPriceInsight: ArrivalPriceInsight = { summary: '-', points: [] };

  weeklyMax(): number {
    return Math.max(...this.weeklyMovement.map((item) => item.price), 1);
  }

  weeklyHeight(price: number): number {
    return (price / this.weeklyMax()) * 100;
  }

  arrivalsMax(): number {
    return Math.max(...this.arrivalPriceInsight.points.map((item) => item.arrivals), 1);
  }

  pricesMax(): number {
    return Math.max(...this.arrivalPriceInsight.points.map((item) => item.avgPrice), 1);
  }

  arrivalsWidth(value: number): number {
    return (value / this.arrivalsMax()) * 100;
  }

  pricesWidth(value: number): number {
    return (value / this.pricesMax()) * 100;
  }
}
