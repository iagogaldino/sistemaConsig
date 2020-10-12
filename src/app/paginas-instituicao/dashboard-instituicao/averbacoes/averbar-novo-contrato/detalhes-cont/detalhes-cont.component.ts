import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-cont',
  templateUrl: './detalhes-cont.component.html',
  styleUrls: ['./detalhes-cont.component.css']
})
export class DetalhesContComponent implements OnInit {

  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5'];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      {numero_parcelas: '45', competencia: 'xx/xxxx', valor: '250', valor_pago: '100', situacao: ''},
      {numero_parcelas: '45', competencia: 'xx/xxxx', valor: '250', valor_pago: '100', situacao: ''},
      {numero_parcelas: '45', competencia: 'xx/xxxx', valor: '250', valor_pago: '100', situacao: ''},
      {numero_parcelas: '45', competencia: 'xx/xxxx', valor: '250', valor_pago: '100', situacao: ''},
    ];
  }

}

