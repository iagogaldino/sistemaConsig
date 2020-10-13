import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimentacoes-orgao',
  templateUrl: './movimentacoes-orgao.component.html',
  styleUrls: ['./movimentacoes-orgao.component.css']
})
export class MovimentacoesOrgaoComponent implements OnInit {

  dataSource: any;
   displayedColumns = [
     'dt_averbacao',
     'consignataria',
     'produto',
     'id_funcional',
     'cpf',
     'orgao',
     'valor_descontado',
     'orgao',
   ];
   constructor() { }

   ngOnInit(): void {
     this.dataSource = [
       {
        dt_averbacao: '10/01/1995',
         consignataria: 'Bradesco',
         produto: 'Nome do produto',
         id_funcional: '999999',
         cpf: '999.999.999-99',
         orgao: 'Nome do Órgão',
         valor_descontado: 'R$500',
       }
     ];
   }

}
