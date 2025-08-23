import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MandiRatesService } from '../../services/mandi-rates.service';
import { PriceApiResponseDto, PriceRecordDto } from '../../models/product';
import { PriceRequestDto } from '../../models/User';
import { STATE_DISTRICT_MAP } from '../../data/state-districts';

@Component({
  selector: 'app-mandi-rates',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mandi-rates.component.html',
  styleUrls: ['./mandi-rates.component.css']
})
export class MandiRatesComponent implements OnInit {
  records: PriceRecordDto[] = [];
  loading = false;
  error: string | null = null;
  filterForm!: FormGroup;
  totalRowCount = 0; // total rows from API

  // ✅ states & districts dictionary
  states = Object.keys(STATE_DISTRICT_MAP);
  districts: string[] = [];

  // ✅ pagination
  currentPage = 1;

  constructor(
    private mandiRatesService: MandiRatesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // ✅ build filter form
    this.filterForm = new FormGroup({
  state: new FormControl('Rajasthan'),
  district: new FormControl('Baran'),
  commodity: new FormControl('Wheat'),
  fromDate: new FormControl('2025-08-01'),
  toDate: new FormControl('2025-08-23'),
  limit: new FormControl(10),
  offset: new FormControl(0),
  sortMarket: new FormControl('asc')
});

    // when state changes → update districts
    this.filterForm.get('state')?.valueChanges.subscribe((state: string) => {
      this.districts = STATE_DISTRICT_MAP[state] || [];
      this.filterForm.patchValue({ district: '' });
    });

    this.fetchRates(); // initial load
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
          console.log('API response:', res);
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
    this.currentPage = 1; // reset to page 1 on new filter
    this.filterForm.patchValue({ offset: 0 });
    this.fetchRates();
  }

  // ✅ pagination handlers
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
  const limit = +(event.target as HTMLSelectElement).value; // cast & convert to number
  this.filterForm.patchValue({ limit, offset: 0 });
  this.currentPage = 1;
  this.fetchRates();
}
}
