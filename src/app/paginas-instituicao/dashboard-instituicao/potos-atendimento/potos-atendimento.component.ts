import { FormPostoAtendimentoComponent } from './../form-posto-atendimento/form-posto-atendimento.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-potos-atendimento',
  templateUrl: './potos-atendimento.component.html',
  styleUrls: ['./potos-atendimento.component.css']
})
export class PotosAtendimentoComponent implements OnInit {

  displayedColumns: string[] = ['endereco', 'bairro', 'cidade', 'uf', 'telefone'];
  dataSource: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

    this.dataSource = [
      {id: 1, endereco: 'Rua nome da rua', bairro: 'Nome do bairro', cidade: 'Nome da Cidade', uf: 'SP.', telefone: '99 99999-9999'},
    ];

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormPostoAtendimentoComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }




}
