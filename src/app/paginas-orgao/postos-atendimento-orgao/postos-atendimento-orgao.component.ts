import { PostoAtendimentoFormComponent } from './../posto-atendimento-form/posto-atendimento-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManutencaoInstituicaoNovoPerfilComponent } from 'src/app/paginas-instituicao/dashboard-instituicao/manutencao-instituicao-novo-perfil/manutencao-instituicao-novo-perfil.component';

@Component({
  selector: 'app-postos-atendimento-orgao',
  templateUrl: './postos-atendimento-orgao.component.html',
  styleUrls: ['./postos-atendimento-orgao.component.css']
})
export class PostosAtendimentoOrgaoComponent implements OnInit {
  displayedColumns = [
    'endereco',
    'bairro',
    'cidade',
    'uf',
    'telefone'
  ];
    dataSource: any;
    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {
      this.dataSource = [
        {endereco: 'Endereço', bairro: 'Nome bairro', cidade: 'Nome cidade', uf: 'BA', telefone: '(99)99999-9999'}
      ];

    }


    openDialog2(): void {
      const dialogRef = this.dialog.open(PostoAtendimentoFormComponent, {
        width: '500px',
        height: '500px',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
    }
  }
