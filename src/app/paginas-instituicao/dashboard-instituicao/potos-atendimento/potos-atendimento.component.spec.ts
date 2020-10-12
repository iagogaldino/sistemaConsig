import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotosAtendimentoComponent } from './potos-atendimento.component';

describe('PotosAtendimentoComponent', () => {
  let component: PotosAtendimentoComponent;
  let fixture: ComponentFixture<PotosAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotosAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotosAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
