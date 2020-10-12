import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial-inst',
  templateUrl: './pagina-inicial-inst.component.html',
  styleUrls: ['./pagina-inicial-inst.component.css']
})
export class PaginaInicialInstComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

}
