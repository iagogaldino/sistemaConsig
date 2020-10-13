import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesReservaOrgaoComponent } from './detalhes-reserva-orgao.component';

describe('DetalhesReservaOrgaoComponent', () => {
  let component: DetalhesReservaOrgaoComponent;
  let fixture: ComponentFixture<DetalhesReservaOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesReservaOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesReservaOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
