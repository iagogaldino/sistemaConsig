import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortabilidadeComponent } from './portabilidade.component';

describe('PortabilidadeComponent', () => {
  let component: PortabilidadeComponent;
  let fixture: ComponentFixture<PortabilidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortabilidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
