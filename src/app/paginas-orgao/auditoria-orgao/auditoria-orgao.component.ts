import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auditoria-orgao',
  templateUrl: './auditoria-orgao.component.html',
  styleUrls: ['./auditoria-orgao.component.css']
})
export class AuditoriaOrgaoComponent implements OnInit {
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
