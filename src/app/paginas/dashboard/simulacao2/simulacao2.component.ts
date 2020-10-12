import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulacao2',
  templateUrl: './simulacao2.component.html',
  styleUrls: ['./simulacao2.component.css']
})
export class Simulacao2Component implements OnInit {
  displayedColumns: string[] = ['instituicao', 'juros', 'cet', 'valorTotal', 'like'];
  dataSource: any ;
  constructor() { }

  ngOnInit(): void {


    this.dataSource = [
      {instituicao: 'XXX', juros: '900%', cet: 'XXX', valorTotal: '1.400,00', like: 's2'},
      {instituicao: '', juros: '', cet: '', valorTotal: '', like: ''},
      {instituicao: '', juros: '', cet: '', valorTotal: '', like: ''},
      {instituicao: '', juros: '', cet: '', valorTotal: '', like: ''},
      {instituicao: '', juros: '', cet: '', valorTotal: '', like: ''},
    ];


  }

}
