import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auditoria-instituicao',
  templateUrl: './auditoria-instituicao.component.html',
  styleUrls: ['./auditoria-instituicao.component.css']
})
export class AuditoriaInstituicaoComponent implements OnInit {
  displayedColumns: string [] = [
    'data_hora',
    'usuario',
    'tipoop',
    'log',
  ];
  dataSource: any;
  constructor() { }

  ngOnInit(): void {

    this.dataSource = [
      {data_hora: '1', usuario: '2', id: '3', log: ''}

  ];
}
}
