import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosOrgaoComponent } from './produtos-orgao.component';

describe('ProdutosOrgaoComponent', () => {
  let component: ProdutosOrgaoComponent;
  let fixture: ComponentFixture<ProdutosOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
