import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhamento-contrato-orgao',
  templateUrl: './detalhamento-contrato-orgao.component.html',
  styleUrls: ['./detalhamento-contrato-orgao.component.css']
})
export class DetalhamentoContratoOrgaoComponent implements OnInit {
  displayedColumns: string[] = ['n_parcela',
  'competencia',
  'valor',
  'valor_pago',
  'situacao',
];
  dataSource: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = [
      {n_parcela: '10', competencia: 'xx/xxxx', valor: 10000, valor_pago: 10000, situacao: 'ok'},
    ];
  }
/*
  supenderCont(): void {
    const dialogRef = this.dialog.open(SuspenderContratoComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  ordemJud(): void {
    const dialogRef = this.dialog.open(OrdemJudicialComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  cancelarContrato(): void {
    const dialogRef = this.dialog.open(CancelarContratoComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  liquidar(): void {
    const dialogRef = this.dialog.open(LiquidarComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


*/
}
