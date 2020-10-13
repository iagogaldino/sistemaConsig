import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidoresOrgaoComponent } from './servidores-orgao.component';

describe('ServidoresOrgaoComponent', () => {
  let component: ServidoresOrgaoComponent;
  let fixture: ComponentFixture<ServidoresOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServidoresOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServidoresOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
