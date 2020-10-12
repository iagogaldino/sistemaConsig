import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoContComponent } from './detalhamento-cont.component';

describe('DetalhamentoContComponent', () => {
  let component: DetalhamentoContComponent;
  let fixture: ComponentFixture<DetalhamentoContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhamentoContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhamentoContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
