import { MatDialog } from '@angular/material/dialog';
import { Popup2Component } from './../averbacoes/averbar-novo-contrato/popup2/popup2.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refinanciar-resumo',
  templateUrl: './refinanciar-resumo.component.html',
  styleUrls: ['./refinanciar-resumo.component.css']
})
export class RefinanciarResumoComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  aceitar() {
    const dialogRef = this.dialog.open(Popup2Component, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }



}
