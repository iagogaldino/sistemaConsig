import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoOrgaoComponent } from './manutencao-orgao.component';

describe('ManutencaoOrgaoComponent', () => {
  let component: ManutencaoOrgaoComponent;
  let fixture: ComponentFixture<ManutencaoOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
