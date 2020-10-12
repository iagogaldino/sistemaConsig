import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortabilidadesComponent } from './portabilidades.component';

describe('PortabilidadesComponent', () => {
  let component: PortabilidadesComponent;
  let fixture: ComponentFixture<PortabilidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortabilidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
