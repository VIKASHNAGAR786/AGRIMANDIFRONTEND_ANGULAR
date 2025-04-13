import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductinventoryComponent } from './productinventory.component';

describe('ProductinventoryComponent', () => {
  let component: ProductinventoryComponent;
  let fixture: ComponentFixture<ProductinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductinventoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
