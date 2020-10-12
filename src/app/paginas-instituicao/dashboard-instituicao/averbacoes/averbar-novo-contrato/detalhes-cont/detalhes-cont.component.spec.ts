import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesContComponent } from './detalhes-cont.component';

describe('DetalhesContComponent', () => {
  let component: DetalhesContComponent;
  let fixture: ComponentFixture<DetalhesContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
