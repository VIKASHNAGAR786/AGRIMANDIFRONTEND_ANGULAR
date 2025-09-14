import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MandiRatesService } from '../../services/mandi-rates.service';
import { PriceApiResponseDto, PriceRecordDto } from '../../models/product';
import { PriceRequestDto } from '../../models/User';
import { STATE_DISTRICT_MAP } from '../../data/state-districts';
import { STATE_DISTRICT_COMMODITIES } from '../../data/commodity_names';
import { TranslateModule } from '@ngx-translate/core';

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

  constructor(private mandiRatesService: MandiRatesService) {}

 ngOnInit(): void {
  this.filterForm = new FormGroup({
    state: new FormControl('Rajasthan'),
    district: new FormControl('Baran'),   // ✅ default district
    commodity: new FormControl(''),
    fromDate: new FormControl(this.formatDate(this.subtractDays(new Date(), 2))),
    toDate: new FormControl(this.formatDate(new Date())),
    limit: new FormControl(10),
    offset: new FormControl(0),
    sortMarket: new FormControl('asc')
  });

  // ✅ When state changes → update districts & reset commodities
  this.filterForm.get('state')?.valueChanges.subscribe((state: string) => {
    this.districts = STATE_DISTRICT_MAP[state] || [];
    
    // If Rajasthan is default, keep Baran
    const defaultDistrict = state === 'Rajasthan' ? 'Baran' : '';
    this.filterForm.patchValue({ district: defaultDistrict });
    
    this.commodities = [];
  });

  // ✅ When district changes → update commodities
  this.filterForm.get('district')?.valueChanges.subscribe((district: string) => {
    const state = this.filterForm.get('state')?.value;
    if (state && district) {
      this.commodities = STATE_DISTRICT_COMMODITIES[state]?.[district] || [];
    } else {
      this.commodities = [];
    }
  });

  // ✅ Initialize district list & commodities immediately
  this.districts = STATE_DISTRICT_MAP['Rajasthan'] || [];
  this.commodities = STATE_DISTRICT_COMMODITIES['Rajasthan']?.['Baran'] || [];

  this.fetchRates(); // initial load
}


  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // yyyy-MM-dd
  }

  fetchRates(): void {
    this.loading = true;
    this.error = null;

    const request: PriceRequestDto = this.filterForm.value;

    this.mandiRatesService.GetMandiPriceData(request).subscribe({
      next: (res: PriceApiResponseDto | null) => {
        if (res) {
          this.records = res.records;
          this.totalRowCount = res.total;
        } else {
          this.error = 'No data returned from API';
        }
        this.loading = false;
      },
      error: err => {
        console.error('Component error:', err);
        this.error = 'Failed to fetch mandi rates';
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
  private subtractDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}
}
