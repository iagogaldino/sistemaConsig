import { ProdutoNovoCadastroOrgaoComponent } from './../produto-novo-cadastro-orgao/produto-novo-cadastro-orgao.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoDetalhesOrgaoComponent } from '../produto-detalhes-orgao/produto-detalhes-orgao.component';

@Component({
  selector: 'app-produtos-orgao',
  templateUrl: './produtos-orgao.component.html',
  styleUrls: ['./produtos-orgao.component.css']
})
export class ProdutosOrgaoComponent implements OnInit {
  displayedColumns = ['produto', 'dt_cadastro', 'dt_inicio', 'prazo', 'juros', 'detalhes', 'status'];
  dataSource: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

    this.dataSource = [
      {nome: 'Emprestimo', dt_cadastro: '10/08/2020', dt_inicio: '10/08/2022', prazo: '45', juros: '46%', status: 1}
    ];

  }

  addNProd(): void {
    const dialogRef = this.dialog.open(ProdutoNovoCadastroOrgaoComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  detProd() {
    const dialogRef = this.dialog.open(ProdutoDetalhesOrgaoComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
