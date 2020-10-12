import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostoAtendimentoComponent } from './form-posto-atendimento.component';

describe('FormPostoAtendimentoComponent', () => {
  let component: FormPostoAtendimentoComponent;
  let fixture: ComponentFixture<FormPostoAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPostoAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPostoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
