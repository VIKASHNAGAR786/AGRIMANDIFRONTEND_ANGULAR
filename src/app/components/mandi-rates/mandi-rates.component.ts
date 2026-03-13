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

@Component({
  selector: 'app-mandi-rates',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,TranslateModule],
  templateUrl: './mandi-rates.component.html',
  styleUrls: ['./mandi-rates.component.css']
})
export class MandiRatesComponent implements OnInit {
  records: PriceRecordDto[] = [];
  loading = false;
  error: string | null = null;
  filterForm!: FormGroup;
  totalRowCount = 0;
  commodities: string[] = []; // <-- will hold commodities for selected state & district

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
        } else {
          this.records = [];
          this.totalRowCount = 0;
          this.error = 'No data returned from API';
        }
        this.loading = false;
      },
      error: err => {
        console.error('Component error:', err);
        this.error = 'Failed to fetch mandi rates';
        this.records = [];
        this.totalRowCount = 0;
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

  get canGoNextPage(): boolean {
    const limit = Number(this.filterForm.value.limit || 10);
    return this.currentPage * limit < this.totalRowCount;
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
}
