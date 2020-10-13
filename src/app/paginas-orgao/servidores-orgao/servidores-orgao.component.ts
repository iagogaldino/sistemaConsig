import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servidores-orgao',
  templateUrl: './servidores-orgao.component.html',
  styleUrls: ['./servidores-orgao.component.css']
})
export class ServidoresOrgaoComponent implements OnInit {

  displayedColumns = [
    'nome',
    'cpf',
    'id_funcional',
    'detalhes',
  ];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      {
        nome: 'Nome servidor completo?',
        cpf: '999.999.999-99',
        id_funcional: '448489'
      },
    ];
  }
}
