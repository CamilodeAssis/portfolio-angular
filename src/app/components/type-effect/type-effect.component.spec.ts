import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEffectComponent } from './type-effect.component';

describe('TypeEffectComponent', () => {
  let component: TypeEffectComponent;
  let fixture: ComponentFixture<TypeEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeEffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
