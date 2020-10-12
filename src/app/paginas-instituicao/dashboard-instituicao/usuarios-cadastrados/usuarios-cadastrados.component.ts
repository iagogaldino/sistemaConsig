import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-cadastrados',
  templateUrl: './usuarios-cadastrados.component.html',
  styleUrls: ['./usuarios-cadastrados.component.css']
})
export class UsuariosCadastradosComponent implements OnInit {

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
