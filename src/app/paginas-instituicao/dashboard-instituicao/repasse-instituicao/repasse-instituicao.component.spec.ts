import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasseInstituicaoComponent } from './repasse-instituicao.component';

describe('RepasseInstituicaoComponent', () => {
  let component: RepasseInstituicaoComponent;
  let fixture: ComponentFixture<RepasseInstituicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepasseInstituicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepasseInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
