import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MandiRatesService } from '../../services/mandi-rates.service';
import { PriceApiResponseDto, PriceRecordDto } from '../../models/product';
import { PriceRequestDto } from '../../models/User';
import { STATE_DISTRICT_MAP } from '../../data/state-districts';

@Component({
  selector: 'app-mandi-rates',
  standalone: true, // ✅ since you’re using imports array
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mandi-rates.component.html',
  styleUrls: ['./mandi-rates.component.css']
})
export class MandiRatesComponent implements OnInit {
  records: PriceRecordDto[] = [];
  loading = false;
  error: string | null = null;
  filterForm!: FormGroup;
    // ✅ states & districts dictionary
  states = Object.keys(STATE_DISTRICT_MAP);
  districts: string[] = [];

  constructor(
    private mandiRatesService: MandiRatesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // ✅ build filter form
    this.filterForm = this.fb.group({
      state: ['Rajasthan'],
      district: ['Baran'],
      commodity: ['Wheat'],
      fromDate: ['2025-08-01'],
      toDate: ['2025-08-23'],
      limit: [50],
      offset: [0],
      sortMarket: ['asc']
    });

     this.filterForm.get('state')?.valueChanges.subscribe((state: string) => {
      this.districts = STATE_DISTRICT_MAP[state] || [];
      this.filterForm.patchValue({ district: '' }); // reset district when state changes
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
    this.fetchRates();
  }
}
