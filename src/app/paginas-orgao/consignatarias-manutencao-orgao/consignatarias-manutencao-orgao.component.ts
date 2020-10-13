import { CadastroConssignatariaOrgaoComponent } from './../cadastro-conssignataria-orgao/cadastro-conssignataria-orgao.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-consignatarias-manutencao-orgao',
  templateUrl: './consignatarias-manutencao-orgao.component.html',
  styleUrls: ['./consignatarias-manutencao-orgao.component.css']
})
export class ConsignatariasManutencaoOrgaoComponent implements OnInit {


  displayedColumns: string[] = [
    'consignataria',
    'dt_cadastro',
    'dt_renovacao',
    'cnpj',
    'detalhes',
    'status',
  ];
  dataSource: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

    this.dataSource = [
      {
        consignataria: 'Bradesco',
        dt_cadastro: '10/06/1998',
        dt_renovacao: '10/06/1998',
        cnpj: '999.999.999/999',
        status: '0',
      }
    ];
  }

  cadastroConsig() {
    const dialogRef = this.dialog.open(CadastroConssignatariaOrgaoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
