import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosOrgaoComponent } from './contratos-orgao.component';

describe('ContratosOrgaoComponent', () => {
  let component: ContratosOrgaoComponent;
  let fixture: ComponentFixture<ContratosOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratosOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
