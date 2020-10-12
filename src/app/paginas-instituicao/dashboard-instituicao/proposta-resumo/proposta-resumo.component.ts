import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Popup2Component } from '../averbacoes/averbar-novo-contrato/popup2/popup2.component';

@Component({
  selector: 'app-proposta-resumo',
  templateUrl: './proposta-resumo.component.html',
  styleUrls: ['./proposta-resumo.component.css']
})
export class PropostaResumoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  aceitar(): void {
    const dialogRef = this.dialog.open(Popup2Component, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
