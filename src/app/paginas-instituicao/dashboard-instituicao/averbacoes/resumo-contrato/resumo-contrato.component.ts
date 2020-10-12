import { Popup1Component } from './../averbar-novo-contrato/popup1/popup1.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Popup2Component } from '../averbar-novo-contrato/popup2/popup2.component';

@Component({
  selector: 'app-resumo-contrato',
  templateUrl: './resumo-contrato.component.html',
  styleUrls: ['./resumo-contrato.component.css']
})
export class ResumoContratoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  popup1(): void {
    const dialogRef = this.dialog.open(Popup1Component, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  popup2(): void {
    const dialogRef = this.dialog.open(Popup2Component, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
