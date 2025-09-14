import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrimandiSearchComponent } from './agrimandi-search.component';

describe('AgrimandiSearchComponent', () => {
  let component: AgrimandiSearchComponent;
  let fixture: ComponentFixture<AgrimandiSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrimandiSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrimandiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
