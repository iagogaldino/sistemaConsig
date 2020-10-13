import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consignatarias-orgao',
  templateUrl: './consignatarias-orgao.component.html',
  styleUrls: ['./consignatarias-orgao.component.css']
})
export class ConsignatariasOrgaoComponent implements OnInit {

  displayedColumns: string[] = [
    'consignataria',
    'status',
    'dt_inicio',
    'qnt_contratos',
  ];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {

    this.dataSource = [
      {
        consignataria: 'Bradesco',
        status: 'Status coluna?',
        dt_inicio: '10/06/1998',
        qnt_contratos: '42',
      }
    ];


  }
}
