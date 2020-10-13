import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marktshare-orgao',
  templateUrl: './marktshare-orgao.component.html',
  styleUrls: ['./marktshare-orgao.component.css']
})
export class MarktshareOrgaoComponent implements OnInit {

  public pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData = [300, 500, 100];
  public pieChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;


  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  displayedColumns: string[] = [
    'periodo',
    'consignataria',
    'total_desconto_efetivado',
    'total_carteira',
    'total_descontos_efetivados_porc',
    'total_carteira_porc',
  ];
  dataSource: any;



  constructor() { }

  ngOnInit(): void {

    this.dataSource = [
      {
        periodo: 'xxxx',
        consignataria: 'Bradesco',
        total_desconto_efetivado: 'R$480',
        total_carteira: 'R$980',
        total_descontos_efetivados_porc: '6',
        total_carteira_porc: '3',
      }
    ];


  }
}
