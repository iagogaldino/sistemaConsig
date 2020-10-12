import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      // tslint:disable-next-line: max-line-length
      { nome: 'Nome', instituicao: 'instituicao', dt_inicio: 'dt_inicio', valor_parcela: 'valor_parcela', prazo: 'prazo', situacao: 'situacao' }
    ];
  }

}
