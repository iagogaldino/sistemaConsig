import { MatDialog } from '@angular/material/dialog';
import { DigitalizarOrdemJudOrgaoComponent } from './../digitalizar-ordem-jud-orgao/digitalizar-ordem-jud-orgao.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contratos-orgao',
  templateUrl: './contratos-orgao.component.html',
  styleUrls: ['./contratos-orgao.component.css']
})
export class ContratosOrgaoComponent implements OnInit {
  dataSource: any;
  displayedColumns = [
    'checkbox',
    'n_contrato',
    'consignataria',
    'dt_inicio',
    'valor_parcela',
    'prazo',
    'parcelas_pagas',
    'situacao',
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = [
      {
        n_contrato: '9999999',
        consignataria: 'Bradesco',
        dt_inicio: '10/06/2020',
        valor_parcela: 'R$300,00',
        prazo: '120',
        parcelas_pagas: '109',
        situacao: 'Ativo',
      }
    ];
  }

  digitalizarOrdemJud(): void {
    const dialogRef = this.dialog.open(DigitalizarOrdemJudOrgaoComponent, {
      width: '350px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


}
