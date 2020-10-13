import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealocarMargemOrgaoComponent } from './realocar-margem-orgao.component';

describe('RealocarMargemOrgaoComponent', () => {
  let component: RealocarMargemOrgaoComponent;
  let fixture: ComponentFixture<RealocarMargemOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealocarMargemOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealocarMargemOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
