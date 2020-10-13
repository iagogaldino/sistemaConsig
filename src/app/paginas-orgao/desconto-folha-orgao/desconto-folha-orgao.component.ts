import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desconto-folha-orgao',
  templateUrl: './desconto-folha-orgao.component.html',
  styleUrls: ['./desconto-folha-orgao.component.css']
})
export class DescontoFolhaOrgaoComponent implements OnInit {

   dataSource: any;
   displayedColumns = [
     'competencia',
     'consignataria',
     'produto',
     'id_funcional',
     'cpf',
     'orgao',
     'valor_descontado',
     'situacao',
   ];
   constructor() { }

   ngOnInit(): void {
     this.dataSource = [
       {
         competencia: '9999999',
         consignataria: 'Bradesco',
         produto: 'Nome do produto',
         id_funcional: '999999',
         cpf: '999.999.999-99',
         orgao: 'Nome do Órgão',
         valor_descontado: 'R$500',
         situacao: 'Ativo',
       }
     ];
   }

}
