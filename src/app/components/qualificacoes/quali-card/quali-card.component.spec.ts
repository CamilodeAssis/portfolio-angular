import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualiCardComponent } from './quali-card.component';

describe('QualiCardComponent', () => {
  let component: QualiCardComponent;
  let fixture: ComponentFixture<QualiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualiCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
