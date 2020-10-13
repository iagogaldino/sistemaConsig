import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostoAtendimentoFormComponent } from '../posto-atendimento-form/posto-atendimento-form.component';

@Component({
  selector: 'app-repositorio-arquivos-orgao',
  templateUrl: './repositorio-arquivos-orgao.component.html',
  styleUrls: ['./repositorio-arquivos-orgao.component.css']
})
export class RepositorioArquivosOrgaoComponent implements OnInit {

  displayedColumns = [
    'arquivo',
    'dt_envio',
    'usuario',
    'descricao'
  ];
    dataSource: any;
    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {
      this.dataSource = [
        {arquivo: 'Arquivo?', dt_envio: '10/06/2020', usuario: 'Nome Usuário', descricao: 'Descrição teste here'}
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
