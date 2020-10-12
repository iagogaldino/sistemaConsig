import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-posto-atendimento',
  templateUrl: './form-posto-atendimento.component.html',
  styleUrls: ['./form-posto-atendimento.component.css']
})
export class FormPostoAtendimentoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormPostoAtendimentoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }


}
