import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverbacoesComponent } from './averbacoes.component';

describe('AverbacoesComponent', () => {
  let component: AverbacoesComponent;
  let fixture: ComponentFixture<AverbacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverbacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverbacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
