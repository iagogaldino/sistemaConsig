import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ProdutoDetalhesOrgaoComponent } from '../produto-detalhes-orgao/produto-detalhes-orgao.component';

@Component({
  selector: 'app-produto-novo-cadastro-orgao',
  templateUrl: './produto-novo-cadastro-orgao.component.html',
  styleUrls: ['./produto-novo-cadastro-orgao.component.css']
})
export class ProdutoNovoCadastroOrgaoComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


}
