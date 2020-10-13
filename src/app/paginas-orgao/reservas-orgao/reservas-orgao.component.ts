import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas-orgao',
  templateUrl: './reservas-orgao.component.html',
  styleUrls: ['./reservas-orgao.component.css']
})
export class ReservasOrgaoComponent implements OnInit {

  dataSource: any;
  displayedColumns = ['data', 'cpf', 'consignaria', 'produto', 'detalhes'];

  constructor() { }

  ngOnInit(): void {

    this.dataSource = [
      {data: '10/09/1990', cpf: '999.999.999-99', consignaria: 'Consignatária', produto: 'Nome produto'},
      {data: '10/09/1990', cpf: '999.999.999-99', consignaria: 'Consignatária', produto: 'Nome produto'},
      {data: '10/09/1990', cpf: '999.999.999-99', consignaria: 'Consignatária', produto: 'Nome produto'},
      {data: '10/09/1990', cpf: '999.999.999-99', consignaria: 'Consignatária', produto: 'Nome produto'},
      {data: '10/09/1990', cpf: '999.999.999-99', consignaria: 'Consignatária', produto: 'Nome produto'},
    ];

  }

}
