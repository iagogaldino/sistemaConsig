import { Route, Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

clickCadastro() {
  this.routes.navigate(['cadastro']);
}

esqSenha() {
  this.routes.navigate(['esqueceu-senha']);
}

}
