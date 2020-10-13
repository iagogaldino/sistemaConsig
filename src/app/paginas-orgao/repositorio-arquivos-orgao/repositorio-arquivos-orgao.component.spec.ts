import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioArquivosOrgaoComponent } from './repositorio-arquivos-orgao.component';

describe('RepositorioArquivosOrgaoComponent', () => {
  let component: RepositorioArquivosOrgaoComponent;
  let fixture: ComponentFixture<RepositorioArquivosOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorioArquivosOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioArquivosOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
