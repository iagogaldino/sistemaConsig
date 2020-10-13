import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOperacoesComponent } from './log-operacoes.component';

describe('LogOperacoesComponent', () => {
  let component: LogOperacoesComponent;
  let fixture: ComponentFixture<LogOperacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOperacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
