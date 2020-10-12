import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-instituicao',
  templateUrl: './dashboard-instituicao.component.html',
  styleUrls: ['./dashboard-instituicao.component.css']
})
export class DashboardInstituicaoComponent implements OnInit {

  opened: boolean;


  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
