import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-averbacoes',
  templateUrl: './averbacoes.component.html',
  styleUrls: ['./averbacoes.component.css']
})
export class AverbacoesComponent implements OnInit {

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
