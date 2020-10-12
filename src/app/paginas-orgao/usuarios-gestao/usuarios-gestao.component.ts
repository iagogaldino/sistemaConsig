import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-gestao',
  templateUrl: './usuarios-gestao.component.html',
  styleUrls: ['./usuarios-gestao.component.css']
})
export class UsuariosGestaoComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cpf', 'funcao', 'nivelpermissao', 'data_cadastro', 'status'];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {

    this.dataSource = [
      {id: 1, nome: 'Hydrogen', cpf: '999.999.999-99', funcao: 'Função', nivelpermissao: 'Nivel P.', data_cadastro: '10/06/2020', status: '1'},
      {id: 1, nome: 'Hydrogen', cpf: '999.999.999-99', funcao: 'Função', nivelpermissao: 'Nivel P.', data_cadastro: '10/06/2020', status: '1'},
      {id: 1, nome: 'Hydrogen', cpf: '999.999.999-99', funcao: 'Função', nivelpermissao: 'Nivel P.', data_cadastro: '10/06/2020', status: '1'},
      {id: 1, nome: 'Hydrogen', cpf: '999.999.999-99', funcao: 'Função', nivelpermissao: 'Nivel P.', data_cadastro: '10/06/2020', status: '1'},
      {id: 1, nome: 'Hydrogen', cpf: '999.999.999-99', funcao: 'Função', nivelpermissao: 'Nivel P.', data_cadastro: '10/06/2020', status: '1'},
      {id: 1, nome: 'Hydrogen', cpf: '999.999.999-99', funcao: 'Função', nivelpermissao: 'Nivel P.', data_cadastro: '10/06/2020', status: '1'},
      {id: 1, nome: 'Hydrogen', cpf: '999.999.999-99', funcao: 'Função', nivelpermissao: 'Nivel P.', data_cadastro: '10/06/2020', status: '1'},
      {id: 1, nome: 'Hydrogen', cpf: '999.999.999-99', funcao: 'Função', nivelpermissao: 'Nivel P.', data_cadastro: '10/06/2020', status: '1'},
    ];

  }

}
