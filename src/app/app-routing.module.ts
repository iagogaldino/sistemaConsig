import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { EsqueceuSenhaComponent } from './paginas/esqueceu-senha/esqueceu-senha.component';
import { CadastroUsuarioInstitucionalComponent } from './paginas/cadastro-usuario-institucional/cadastro-usuario-institucional.component';
import { LoginComponent } from './paginas/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroNovaSenhaComponent } from './paginas/cadastro-nova-senha/cadastro-nova-senha.component';


const routes: Routes = [
  /* Rotas de usuarios comuns */

    { path: '', component: LoginComponent },

  { path: 'cadastro', component: CadastroUsuarioInstitucionalComponent },
  { path: 'esqueceu-senha', component: EsqueceuSenhaComponent },
  { path: 'cadastro-nova-senha', component: CadastroNovaSenhaComponent },

  { path: 'dashboard', component: DashboardComponent },
  /* Rotas de usuarios comuns */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
