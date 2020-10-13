import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-operacoes',
  templateUrl: './log-operacoes.component.html',
  styleUrls: ['./log-operacoes.component.css']
})
export class LogOperacoesComponent implements OnInit {

  dataSource: any;
  displayedColumns: any;

  constructor() { }

  ngOnInit(): void {
  }

}
