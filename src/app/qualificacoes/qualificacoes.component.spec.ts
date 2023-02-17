import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificacoesComponent } from './qualificacoes.component';

describe('QualificacoesComponent', () => {
  let component: QualificacoesComponent;
  let fixture: ComponentFixture<QualificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
