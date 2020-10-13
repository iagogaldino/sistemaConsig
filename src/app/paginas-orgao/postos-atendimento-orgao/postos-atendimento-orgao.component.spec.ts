import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostosAtendimentoOrgaoComponent } from './postos-atendimento-orgao.component';

describe('PostosAtendimentoOrgaoComponent', () => {
  let component: PostosAtendimentoOrgaoComponent;
  let fixture: ComponentFixture<PostosAtendimentoOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostosAtendimentoOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostosAtendimentoOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
