import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consignataria',
  templateUrl: './consignataria.component.html',
  styleUrls: ['./consignataria.component.css']
})
export class ConsignatariaComponent implements OnInit {
  displayedColumns: string[] = [
    'instituicao',
    'telefone',
    'cidade',
    'uf',
    'endereco',
  ];
  dataSource: any;
  constructor() {}

  ngOnInit(): void {
    this.dataSource = [
      {instituicao: 'ufpe', telefone: 'XXXXXX', cidade: 'Recife', uf: 'PE', endereco: 'XXXXXX' },
      {instituicao: 'ufpe', telefone: 'XXXXXX', cidade: 'Recife', uf: 'PE', endereco: 'XXXXXX' },
      {instituicao: 'ufpe', telefone: 'XXXXXX', cidade: 'Recife', uf: 'PE', endereco: 'XXXXXX' },
      {instituicao: 'ufpe', telefone: 'XXXXXX', cidade: 'Recife', uf: 'PE', endereco: 'XXXXXX' },
  ];
  }
}
