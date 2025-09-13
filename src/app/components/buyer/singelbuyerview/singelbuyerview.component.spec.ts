import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingelbuyerviewComponent } from './singelbuyerview.component';

describe('SingelbuyerviewComponent', () => {
  let component: SingelbuyerviewComponent;
  let fixture: ComponentFixture<SingelbuyerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingelbuyerviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingelbuyerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
