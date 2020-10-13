import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostoAtendimentoFormComponent } from './posto-atendimento-form.component';

describe('PostoAtendimentoFormComponent', () => {
  let component: PostoAtendimentoFormComponent;
  let fixture: ComponentFixture<PostoAtendimentoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostoAtendimentoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostoAtendimentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
