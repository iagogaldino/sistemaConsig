import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortabilidadeOrgaoComponent } from './portabilidade-orgao.component';

describe('PortabilidadeOrgaoComponent', () => {
  let component: PortabilidadeOrgaoComponent;
  let fixture: ComponentFixture<PortabilidadeOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortabilidadeOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortabilidadeOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
