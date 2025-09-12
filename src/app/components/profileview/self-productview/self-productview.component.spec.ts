import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfProductviewComponent } from './self-productview.component';

describe('SelfProductviewComponent', () => {
  let component: SelfProductviewComponent;
  let fixture: ComponentFixture<SelfProductviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfProductviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfProductviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
