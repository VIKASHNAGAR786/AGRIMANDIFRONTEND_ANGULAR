import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MandiRatesService } from '../../services/mandi-rates.service';
import { PriceApiResponseDto, PriceRecordDto } from '../../models/product';
import { PriceRequestDto } from '../../models/User';
import { STATE_DISTRICT_MAP } from '../../data/state-districts';
import { STATE_DISTRICT_COMMODITIES } from '../../data/commodity_names';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MandiDashboardComponent } from './dashboard/mandi-dashboard.component';
import {
  ArrivalPriceInsight,
  BestMandiItem,
  CropDistributionItem,
  CropPriceTag,
  DailyPriceChangeItem,
  DemandSupplyItem,
  DistrictHeatmapItem,
  MandiDashboardData,
  MarketComparisonItem,
  PriceStabilityItem,
  PriceTrendPoint,
  TopCropItem,
  WeeklyMovementItem
} from './dashboard/mandi-dashboard.models';

@Component({
  selector: 'app-mandi-rates',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, MandiDashboardComponent],
  templateUrl: './mandi-rates.component.html',
  styleUrls: ['./mandi-rates.component.css']
})
export class MandiRatesComponent implements OnInit, OnDestroy {
  records: PriceRecordDto[] = [];
  loading = false;
  error: string | null = null;
  filtersCollapsed = true;
  advancedFiltersExpanded = false;
  filterForm!: FormGroup;
  totalRowCount = 0;
  commodities: string[] = []; // <-- will hold commodities for selected state & district
  dashboardData: MandiDashboardData | null = null;

  states = Object.keys(STATE_DISTRICT_MAP);
  districts: string[] = [];
  currentPage = 1;
  readonly defaultState = 'Rajasthan';
  readonly defaultDistrict = 'Baran';
  private readonly subscriptions = new Subscription();

  constructor(private mandiRatesService: MandiRatesService) {}

 ngOnInit(): void {
  this.filterForm = new FormGroup({
    state: new FormControl(this.defaultState),
    district: new FormControl(this.defaultDistrict),
    commodity: new FormControl(''),
    fromDate: new FormControl(this.formatDate(this.subtractDays(new Date(), 2))),
    toDate: new FormControl(this.formatDate(new Date())),
    limit: new FormControl(10),
    offset: new FormControl(0),
    sortMarket: new FormControl('asc')
  });

  this.subscriptions.add(
    this.filterForm.get('state')?.valueChanges.subscribe((state: string) => {
      this.districts = STATE_DISTRICT_MAP[state] || [];
      const district = this.districts.includes(this.defaultDistrict) ? this.defaultDistrict : this.districts[0] || '';
      this.filterForm.patchValue({ district, commodity: '' }, { emitEvent: true });
    }) || new Subscription()
  );

  this.subscriptions.add(
    this.filterForm.get('district')?.valueChanges.subscribe((district: string) => {
      const state = this.filterForm.get('state')?.value;
      this.commodities = state && district ? STATE_DISTRICT_COMMODITIES[state]?.[district] || [] : [];
      this.filterForm.patchValue({ commodity: '' }, { emitEvent: false });
    }) || new Subscription()
  );

  this.initializeStateDistrictCommodity();
    this.dashboardData = this.buildDashboardData([]);
  this.fetchRates();
}

ngOnDestroy(): void {
  this.subscriptions.unsubscribe();
}


  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // yyyy-MM-dd
  }

  fetchRates(): void {
    this.loading = true;
    this.error = null;

    const fromDate = this.filterForm.get('fromDate')?.value;
    const toDate = this.filterForm.get('toDate')?.value;
    if (fromDate && toDate && fromDate > toDate) {
      this.error = 'From date should be earlier than To date.';
      this.loading = false;
      return;
    }

    const request: PriceRequestDto = this.filterForm.value;

    this.mandiRatesService.GetMandiPriceData(request).subscribe({
      next: (res: PriceApiResponseDto | null) => {
        if (res) {
          this.records = res.records;
          this.totalRowCount = res.total;
          this.dashboardData = this.buildDashboardData(this.records);
        } else {
          this.records = [];
          this.totalRowCount = 0;
          this.error = 'No data returned from API';
          this.dashboardData = this.buildDashboardData([]);
        }
        this.loading = false;
      },
      error: err => {
        console.error('Component error:', err);
        this.error = 'Failed to fetch mandi rates';
        this.records = [];
        this.totalRowCount = 0;
        this.dashboardData = this.buildDashboardData([]);
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    this.currentPage = 1;
    this.filterForm.patchValue({ offset: 0 });
    this.fetchRates();
  }

  nextPage(): void {
    if (!this.canGoNextPage || this.loading) {
      return;
    }

    this.currentPage++;
    const newOffset = (this.currentPage - 1) * this.filterForm.value.limit;
    this.filterForm.patchValue({ offset: newOffset });
    this.fetchRates();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      const newOffset = (this.currentPage - 1) * this.filterForm.value.limit;
      this.filterForm.patchValue({ offset: newOffset });
      this.fetchRates();
    }
  }

  changePageSize(event: Event): void {
    const limit = +(event.target as HTMLSelectElement).value;
    this.filterForm.patchValue({ limit, offset: 0 });
    this.currentPage = 1;
    this.fetchRates();
  }

  resetFilters(): void {
    this.filterForm.patchValue(
      {
        state: this.defaultState,
        district: this.defaultDistrict,
        commodity: '',
        fromDate: this.formatDate(this.subtractDays(new Date(), 2)),
        toDate: this.formatDate(new Date()),
        limit: 10,
        offset: 0,
        sortMarket: 'asc'
      },
      { emitEvent: false }
    );

    this.currentPage = 1;
    this.initializeStateDistrictCommodity();
    this.fetchRates();
  }

  setDatePreset(days: number): void {
    this.filterForm.patchValue({
      fromDate: this.formatDate(this.subtractDays(new Date(), days)),
      toDate: this.formatDate(new Date()),
      offset: 0
    });
    this.currentPage = 1;
    this.fetchRates();
  }

  toggleFilters(): void {
    this.filtersCollapsed = !this.filtersCollapsed;

    if (this.filtersCollapsed) {
      this.advancedFiltersExpanded = false;
    }
  }

  toggleAdvancedFilters(): void {
    this.advancedFiltersExpanded = !this.advancedFiltersExpanded;
  }

  get canGoNextPage(): boolean {
    const limit = Number(this.filterForm.value.limit || 10);
    return this.currentPage * limit < this.totalRowCount;
  }

  get totalPages(): number {
    const limit = Number(this.filterForm.value.limit || 10);
    return Math.max(1, Math.ceil(this.totalRowCount / limit));
  }

  get showingFrom(): number {
    return this.totalRowCount === 0 ? 0 : (this.currentPage - 1) * Number(this.filterForm.value.limit || 10) + 1;
  }

  get showingTo(): number {
    return Math.min(this.currentPage * Number(this.filterForm.value.limit || 10), this.totalRowCount);
  }

  get priceSummary(): { min: number; max: number; modalAvg: number } {
    if (this.records.length === 0) {
      return { min: 0, max: 0, modalAvg: 0 };
    }

    const min = Math.min(...this.records.map((rec) => Number(rec.min_Price || 0)));
    const max = Math.max(...this.records.map((rec) => Number(rec.max_Price || 0)));
    const modalTotal = this.records.reduce((sum, rec) => sum + Number(rec.modal_Price || 0), 0);

    return {
      min,
      max,
      modalAvg: Math.round(modalTotal / this.records.length)
    };
  }

  formatInr(value: number | string): string {
    return new Intl.NumberFormat('en-IN').format(Number(value || 0));
  }

  private subtractDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

  private initializeStateDistrictCommodity(): void {
    const state = this.filterForm.get('state')?.value || this.defaultState;
    const district = this.filterForm.get('district')?.value || this.defaultDistrict;

    this.districts = STATE_DISTRICT_MAP[state] || [];
    this.commodities = STATE_DISTRICT_COMMODITIES[state]?.[district] || [];
  }

  private buildDashboardData(records: PriceRecordDto[]): MandiDashboardData {
    const normalized = records.map((record) => ({
      ...record,
      modal: this.toNumber(record.modal_Price),
      min: this.toNumber(record.min_Price),
      max: this.toNumber(record.max_Price),
      parsedDate: this.parseArrivalDate(record.arrival_Date)
    }));

    const hasRecords = normalized.length > 0;
    const uniqueCommodityCount = new Set(normalized.map((item) => item.commodity)).size;
    const latestDate = this.latestDate(normalized.map((item) => item.parsedDate));

    const todayAverage = this.averageByWindow(normalized, latestDate, 1);
    const weeklyAverage = this.averageByWindow(normalized, latestDate, 7);
    const monthlyAverage = this.averageByWindow(normalized, latestDate, 30);

    const highestCrop = this.highestCrop(normalized);
    const lowestCrop = this.lowestCrop(normalized);

    const demandScore = this.demandScore(normalized, latestDate);
    const demandLabel = demandScore >= 65 ? 'High' : demandScore <= 40 ? 'Low' : 'Balanced';

    const kpis: MandiDashboardData['kpis'] = [
      {
        label: "Today's Average Mandi Rate",
        value: `Rs ${this.formatInr(todayAverage)}`,
        hint: 'Based on latest arrival date records',
        tone: 'success' as const
      },
      {
        label: 'Highest Priced Crop',
        value: highestCrop ? highestCrop.commodity : '-',
        hint: highestCrop ? `Rs ${this.formatInr(highestCrop.price)}` : 'No records',
        tone: 'warning' as const
      },
      {
        label: 'Lowest Priced Crop',
        value: lowestCrop ? lowestCrop.commodity : '-',
        hint: lowestCrop ? `Rs ${this.formatInr(lowestCrop.price)}` : 'No records',
        tone: 'danger' as const
      },
      {
        label: 'Total Crops Listed',
        value: `${uniqueCommodityCount}`,
        hint: `${normalized.length} total mandi listings`,
        tone: 'neutral' as const
      },
      {
        label: 'Market Demand Indicator',
        value: demandLabel,
        hint: `${demandScore}/100 derived demand score`,
        tone: demandLabel === 'High' ? 'success' : demandLabel === 'Low' ? 'danger' : 'warning'
      }
    ];

    return {
      kpis,
      windowAverages: [
        { label: 'Today', value: todayAverage },
        { label: 'This Week', value: weeklyAverage },
        { label: 'This Month', value: monthlyAverage }
      ],
      priceTrend: hasRecords ? this.priceTrend(normalized) : [],
      marketComparison: hasRecords ? this.marketComparison(normalized) : [],
      demandSupply: hasRecords ? this.supplyDemand(normalized) : [],
      topCrops: hasRecords ? this.topCrops(normalized) : [],
      cropDistribution: hasRecords ? this.cropDistribution(normalized) : [],
      highestPriceCrop: highestCrop,
      lowestPriceCrop: lowestCrop,
      dailyPriceChanges: hasRecords ? this.dailyPriceChanges(normalized) : [],
      bestMandis: hasRecords ? this.bestMandis(normalized) : [],
      districtHeatmap: hasRecords ? this.districtHeatmap(normalized) : [],
      priceStability: hasRecords ? this.priceStability(normalized) : [],
      weeklyMovement: hasRecords ? this.weeklyMovement(normalized) : [],
      arrivalPriceInsight: hasRecords
        ? this.arrivalPriceInsight(normalized)
        : { summaryKey: 'MANDI_INSIGHTS.ARRIVAL_PRICE.SUMMARY.NO_DATA', points: [] }
    };
  }

  private toNumber(value: string | number): number {
    return Number(value || 0);
  }

  private parseArrivalDate(value: string): Date {
    if (!value) {
      return new Date();
    }

    if (value.includes('/')) {
      const [day, month, year] = value.split('/').map(Number);
      return new Date(year, month - 1, day);
    }

    return new Date(value);
  }

  private sameDate(left: Date, right: Date): boolean {
    return (
      left.getFullYear() === right.getFullYear() &&
      left.getMonth() === right.getMonth() &&
      left.getDate() === right.getDate()
    );
  }

  private latestDate(dates: Date[]): Date {
    if (dates.length === 0) {
      return new Date();
    }

    return new Date(Math.max(...dates.map((date) => date.getTime())));
  }

  private averageByWindow(
    records: Array<{ modal: number; parsedDate: Date }>,
    referenceDate: Date,
    days: number
  ): number {
    const since = new Date(referenceDate);
    since.setDate(referenceDate.getDate() - (days - 1));

    const values = records
      .filter((item) => item.parsedDate >= since && item.parsedDate <= referenceDate)
      .map((item) => item.modal);

    if (values.length === 0 && days === 1) {
      const todayValues = records.filter((item) => this.sameDate(item.parsedDate, referenceDate)).map((item) => item.modal);
      if (todayValues.length > 0) {
        return Math.round(todayValues.reduce((sum, value) => sum + value, 0) / todayValues.length);
      }
    }

    if (values.length === 0) {
      return records.length > 0
        ? Math.round(records.reduce((sum, item) => sum + item.modal, 0) / records.length)
        : 0;
    }

    return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
  }

  private highestCrop(records: Array<{ commodity: string; max: number }>): CropPriceTag | null {
    if (records.length === 0) {
      return null;
    }

    const highest = records.reduce((best, current) => (current.max > best.max ? current : best));
    return { commodity: highest.commodity, price: highest.max };
  }

  private lowestCrop(records: Array<{ commodity: string; min: number }>): CropPriceTag | null {
    if (records.length === 0) {
      return null;
    }

    const lowest = records.reduce((best, current) => (current.min < best.min ? current : best));
    return { commodity: lowest.commodity, price: lowest.min };
  }

  private demandScore(
    records: Array<{ modal: number; min: number; max: number; parsedDate: Date }>,
    referenceDate: Date
  ): number {
    if (records.length === 0) {
      return 0;
    }

    const recent = records.filter((item) => {
      const since = new Date(referenceDate);
      since.setDate(referenceDate.getDate() - 6);
      return item.parsedDate >= since && item.parsedDate <= referenceDate;
    });

    const previous = records.filter((item) => {
      const start = new Date(referenceDate);
      const end = new Date(referenceDate);
      start.setDate(referenceDate.getDate() - 13);
      end.setDate(referenceDate.getDate() - 7);
      return item.parsedDate >= start && item.parsedDate <= end;
    });

    const recentAvg = recent.length > 0 ? recent.reduce((sum, item) => sum + item.modal, 0) / recent.length : 0;
    const previousAvg = previous.length > 0 ? previous.reduce((sum, item) => sum + item.modal, 0) / previous.length : recentAvg;
    const momentum = previousAvg > 0 ? ((recentAvg - previousAvg) / previousAvg) * 100 : 0;

    const spread = records.reduce((sum, item) => sum + (item.max - item.min), 0) / records.length;
    const spreadImpact = Math.max(0, 25 - Math.min(25, spread / 100));
    const momentumImpact = Math.max(-20, Math.min(20, momentum));
    const volumeImpact = Math.min(20, records.length * 1.5);

    const score = Math.round(45 + spreadImpact + momentumImpact + volumeImpact);
    return Math.max(0, Math.min(100, score));
  }

  private priceTrend(records: Array<{ parsedDate: Date; modal: number }>): PriceTrendPoint[] {
    const grouped = new Map<string, { sum: number; count: number; date: Date }>();

    records.forEach((item) => {
      const key = item.parsedDate.toDateString();
      const existing = grouped.get(key);
      if (existing) {
        existing.sum += item.modal;
        existing.count += 1;
      } else {
        grouped.set(key, { sum: item.modal, count: 1, date: item.parsedDate });
      }
    });

    return Array.from(grouped.values())
      .sort((left, right) => left.date.getTime() - right.date.getTime())
      .slice(-10)
      .map((item) => ({
        label: `${item.date.getDate()}/${item.date.getMonth() + 1}`,
        value: Math.round(item.sum / item.count)
      }));
  }

  private marketComparison(
    records: Array<{ market: string; modal: number }>
  ): MarketComparisonItem[] {
    const grouped = new Map<string, { sum: number; count: number }>();

    records.forEach((item) => {
      const existing = grouped.get(item.market);
      if (existing) {
        existing.sum += item.modal;
        existing.count += 1;
      } else {
        grouped.set(item.market, { sum: item.modal, count: 1 });
      }
    });

    return Array.from(grouped.entries())
      .map(([market, value]) => ({
        market,
        avgPrice: Math.round(value.sum / value.count),
        records: value.count
      }))
      .sort((left, right) => right.avgPrice - left.avgPrice)
      .slice(0, 6);
  }

  private supplyDemand(
    records: Array<{ commodity: string; modal: number }>
  ): DemandSupplyItem[] {
    const grouped = new Map<string, { count: number; sum: number }>();

    records.forEach((item) => {
      const existing = grouped.get(item.commodity);
      if (existing) {
        existing.count += 1;
        existing.sum += item.modal;
      } else {
        grouped.set(item.commodity, { count: 1, sum: item.modal });
      }
    });

    const entries = Array.from(grouped.entries()).map(([commodity, value]) => ({
      commodity,
      count: value.count,
      avgPrice: value.sum / value.count
    }));

    const maxCount = Math.max(...entries.map((item) => item.count), 1);
    const maxPrice = Math.max(...entries.map((item) => item.avgPrice), 1);

    return entries
      .sort((left, right) => right.count - left.count)
      .slice(0, 6)
      .map((item) => ({
        commodity: item.commodity,
        supply: Math.round((item.count / maxCount) * 100),
        demand: Math.round((item.avgPrice / maxPrice) * 100)
      }));
  }

  private topCrops(records: Array<{ commodity: string; modal: number; parsedDate: Date }>): TopCropItem[] {
    const grouped = new Map<string, { count: number; sum: number; series: Array<{ date: Date; price: number }> }>();

    records.forEach((item) => {
      const existing = grouped.get(item.commodity);
      if (existing) {
        existing.count += 1;
        existing.sum += item.modal;
        existing.series.push({ date: item.parsedDate, price: item.modal });
      } else {
        grouped.set(item.commodity, {
          count: 1,
          sum: item.modal,
          series: [{ date: item.parsedDate, price: item.modal }]
        });
      }
    });

    return Array.from(grouped.entries())
      .map(([commodity, value]) => {
        const sortedSeries = value.series.sort((left, right) => left.date.getTime() - right.date.getTime());
        const first = sortedSeries[0]?.price || 0;
        const last = sortedSeries[sortedSeries.length - 1]?.price || 0;
        const movement = first > 0 ? ((last - first) / first) * 100 : 0;
        const trend = movement > 3 ? 'up' : movement < -3 ? 'down' : 'flat';

        return {
          commodity,
          avgPrice: Math.round(value.sum / value.count),
          records: value.count,
          trend
        } as TopCropItem;
      })
      .sort((left, right) => right.records - left.records)
      .slice(0, 5);
  }

  private cropDistribution(records: Array<{ commodity: string }>): CropDistributionItem[] {
    const grouped = new Map<string, number>();

    records.forEach((item) => {
      grouped.set(item.commodity, (grouped.get(item.commodity) || 0) + 1);
    });

    const total = records.length;
    return Array.from(grouped.entries())
      .map(([commodity, count]) => ({
        commodity,
        records: count,
        share: Math.round((count / total) * 100)
      }))
      .sort((left, right) => right.records - left.records)
      .slice(0, 6);
  }

  private dailyPriceChanges(
    records: Array<{ commodity: string; modal: number; parsedDate: Date }>
  ): DailyPriceChangeItem[] {
    const uniqueDates = Array.from(new Set(records.map((item) => item.parsedDate.toDateString())))
      .map((value) => new Date(value))
      .sort((left, right) => left.getTime() - right.getTime());

    const latestDate = uniqueDates[uniqueDates.length - 1];
    const previousDate = uniqueDates.length > 1 ? uniqueDates[uniqueDates.length - 2] : latestDate;

    const buildCommodityAvg = (targetDate: Date): Map<string, number> => {
      const grouped = new Map<string, { sum: number; count: number }>();

      records
        .filter((item) => this.sameDate(item.parsedDate, targetDate))
        .forEach((item) => {
          const existing = grouped.get(item.commodity);
          if (existing) {
            existing.sum += item.modal;
            existing.count += 1;
          } else {
            grouped.set(item.commodity, { sum: item.modal, count: 1 });
          }
        });

      return new Map(
        Array.from(grouped.entries()).map(([commodity, value]) => [commodity, Math.round(value.sum / value.count)])
      );
    };

    const latestMap = buildCommodityAvg(latestDate);
    const previousMap = buildCommodityAvg(previousDate);

    return Array.from(latestMap.entries())
      .map(([commodity, latestPrice]) => {
        const previousPrice = previousMap.get(commodity) ?? latestPrice;
        const change = latestPrice - previousPrice;
        const direction = change > 0 ? 'up' : change < 0 ? 'down' : 'flat';

        return {
          commodity,
          latestPrice,
          change,
          direction
        } as DailyPriceChangeItem;
      })
      .sort((left, right) => Math.abs(right.change) - Math.abs(left.change))
      .slice(0, 6);
  }

  private bestMandis(
    records: Array<{ market: string; modal: number; parsedDate: Date }>
  ): BestMandiItem[] {
    const latest = this.latestDate(records.map((item) => item.parsedDate));
    const grouped = new Map<string, { sum: number; count: number }>();

    records
      .filter((item) => this.sameDate(item.parsedDate, latest))
      .forEach((item) => {
        const existing = grouped.get(item.market);
        if (existing) {
          existing.sum += item.modal;
          existing.count += 1;
        } else {
          grouped.set(item.market, { sum: item.modal, count: 1 });
        }
      });

    return Array.from(grouped.entries())
      .map(([mandi, value], index) => ({
        rank: index + 1,
        mandi,
        price: Math.round(value.sum / value.count)
      }))
      .sort((left, right) => right.price - left.price)
      .slice(0, 5)
      .map((item, index) => ({ ...item, rank: index + 1 }));
  }

  private districtHeatmap(
    records: Array<{ district: string; modal: number; parsedDate: Date }>
  ): DistrictHeatmapItem[] {
    const latest = this.latestDate(records.map((item) => item.parsedDate));
    const grouped = new Map<string, { sum: number; count: number }>();

    records
      .filter((item) => this.sameDate(item.parsedDate, latest))
      .forEach((item) => {
        const existing = grouped.get(item.district);
        if (existing) {
          existing.sum += item.modal;
          existing.count += 1;
        } else {
          grouped.set(item.district, { sum: item.modal, count: 1 });
        }
      });

    const districts = Array.from(grouped.entries()).map(([district, value]) => ({
      district,
      price: Math.round(value.sum / value.count)
    }));

    const min = Math.min(...districts.map((item) => item.price), 0);
    const max = Math.max(...districts.map((item) => item.price), 1);
    const step = (max - min) / 3;

    return districts
      .map((item) => {
        const level: DistrictHeatmapItem['level'] =
          item.price >= min + step * 2 ? 'high' : item.price >= min + step ? 'medium' : 'low';

        return {
          district: item.district,
          price: item.price,
          level
        };
      })
      .sort((left, right) => right.price - left.price)
      .slice(0, 10);
  }

  private priceStability(
    records: Array<{ commodity: string; modal: number }>
  ): PriceStabilityItem[] {
    const grouped = new Map<string, number[]>();

    records.forEach((item) => {
      const existing = grouped.get(item.commodity);
      if (existing) {
        existing.push(item.modal);
      } else {
        grouped.set(item.commodity, [item.modal]);
      }
    });

    return Array.from(grouped.entries())
      .map(([commodity, values]) => {
        const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
        const variance = values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length;
        const stdDev = Math.sqrt(variance);
        const cv = mean > 0 ? (stdDev / mean) * 100 : 0;
        const score = Math.min(100, Math.round(cv * 4));
        const status = cv < 8 ? 'Stable' : cv < 15 ? 'Moderate' : 'High Volatility';

        return {
          commodity,
          score,
          status
        } as PriceStabilityItem;
      })
      .sort((left, right) => left.score - right.score)
      .slice(0, 6);
  }

  private weeklyMovement(
    records: Array<{ parsedDate: Date; modal: number }>
  ): WeeklyMovementItem[] {
    const grouped = new Map<string, { sum: number; count: number; date: Date }>();

    records.forEach((item) => {
      const key = item.parsedDate.toDateString();
      const existing = grouped.get(key);
      if (existing) {
        existing.sum += item.modal;
        existing.count += 1;
      } else {
        grouped.set(key, { sum: item.modal, count: 1, date: item.parsedDate });
      }
    });

    return Array.from(grouped.values())
      .sort((left, right) => left.date.getTime() - right.date.getTime())
      .slice(-7)
      .map((item) => ({
        label: item.date.toLocaleDateString('en-IN', { weekday: 'short' }),
        price: Math.round(item.sum / item.count)
      }));
  }

  private arrivalPriceInsight(
    records: Array<{ parsedDate: Date; modal: number }>
  ): ArrivalPriceInsight {
    const grouped = new Map<string, { date: Date; arrivals: number; sum: number }>();

    records.forEach((item) => {
      const key = item.parsedDate.toDateString();
      const existing = grouped.get(key);
      if (existing) {
        existing.arrivals += 1;
        existing.sum += item.modal;
      } else {
        grouped.set(key, { date: item.parsedDate, arrivals: 1, sum: item.modal });
      }
    });

    const points = Array.from(grouped.values())
      .sort((left, right) => left.date.getTime() - right.date.getTime())
      .slice(-7)
      .map((item) => ({
        label: `${item.date.getDate()}/${item.date.getMonth() + 1}`,
        arrivals: item.arrivals,
        avgPrice: Math.round(item.sum / item.arrivals)
      }));

    let summaryKey = 'MANDI_INSIGHTS.ARRIVAL_PRICE.SUMMARY.BALANCED';
    if (points.length > 1) {
      const first = points[0];
      const last = points[points.length - 1];
      const arrivalsUp = last.arrivals > first.arrivals;
      const priceUp = last.avgPrice > first.avgPrice;

      if (arrivalsUp && !priceUp) {
        summaryKey = 'MANDI_INSIGHTS.ARRIVAL_PRICE.SUMMARY.MORE_ARRIVAL_LOW_PRICE';
      } else if (!arrivalsUp && priceUp) {
        summaryKey = 'MANDI_INSIGHTS.ARRIVAL_PRICE.SUMMARY.LESS_ARRIVAL_HIGH_PRICE';
      } else if (arrivalsUp && priceUp) {
        summaryKey = 'MANDI_INSIGHTS.ARRIVAL_PRICE.SUMMARY.BOTH_UP';
      } else {
        summaryKey = 'MANDI_INSIGHTS.ARRIVAL_PRICE.SUMMARY.BOTH_DOWN';
      }
    }

    return { summaryKey, points };
  }
}
