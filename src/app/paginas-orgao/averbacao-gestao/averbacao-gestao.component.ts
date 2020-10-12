import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-averbacao-gestao',
  templateUrl: './averbacao-gestao.component.html',
  styleUrls: ['./averbacao-gestao.component.css']
})
export class AverbacaoGestaoComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cpf', 'id_funcional', 'ver'];
  dataSource: any;


  constructor(private route: Router) { }

  ngOnInit(): void {
    this.dataSource = [
      {nome: 'Nome', cpf: '999.999.999-99', id_funcional: '115987'}
    ];
  }

  verContrato() {
    this.route.navigate(['/contrato-averb']);
  }
}
