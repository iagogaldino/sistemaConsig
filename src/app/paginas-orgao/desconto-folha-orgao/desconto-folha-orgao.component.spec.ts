import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescontoFolhaOrgaoComponent } from './desconto-folha-orgao.component';

describe('DescontoFolhaOrgaoComponent', () => {
  let component: DescontoFolhaOrgaoComponent;
  let fixture: ComponentFixture<DescontoFolhaOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescontoFolhaOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescontoFolhaOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
