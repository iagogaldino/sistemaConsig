import { MatDialog } from '@angular/material/dialog';
import { VisualizacaoManutencaoInstituicaoComponent } from './../visualizacao-manutencao-instituicao/visualizacao-manutencao-instituicao.component';
import { Component, OnInit } from '@angular/core';
import { ManutencaoInstituicaoNovoPerfilComponent } from '../manutencao-instituicao-novo-perfil/manutencao-instituicao-novo-perfil.component';

@Component({
  selector: 'app-manutencao-instituicao',
  templateUrl: './manutencao-instituicao.component.html',
  styleUrls: ['./manutencao-instituicao.component.css'],
})
export class ManutencaoInstituicaoComponent implements OnInit {
  displayedColumns: String[] = [
  'perfil',
  'dt',
  'nivel',
  'visualizar'
];
  dataSource: any;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = [
      {perfil: 'Master', dt: '20/12/2020', nivel: 'ALTO'}
    ];

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VisualizacaoManutencaoInstituicaoComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');

    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(ManutencaoInstituicaoNovoPerfilComponent, {
      width: '500px',
      height: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
