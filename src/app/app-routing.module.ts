import { PropostaResumoComponent } from './paginas-instituicao/dashboard-instituicao/proposta-resumo/proposta-resumo.component';
// tslint:disable-next-line: max-line-length
import { PesquisaPorContratoComponent } from './paginas-instituicao/dashboard-instituicao/pesquisa-por-contrato/pesquisa-por-contrato.component';
import { PropostaComponent } from './paginas-instituicao/dashboard-instituicao/proposta/proposta.component';
import { PortabilidadeComponent } from './paginas-instituicao/dashboard-instituicao/portabilidade/portabilidade.component';
import { DetContratoComponent } from './paginas/dashboard/det-contrato/det-contrato.component';
import { PedidosComponent } from './paginas-instituicao/dashboard-instituicao/pedidos/pedidos.component';
import { ResumoContratoComponent } from './paginas-instituicao/dashboard-instituicao/averbacoes/resumo-contrato/resumo-contrato.component';
import { AverbacoesComponent } from './paginas-instituicao/dashboard-instituicao/averbacoes/averbacoes.component';
// tslint:disable-next-line: max-line-length
import { UsuariosCadastradosComponent } from './paginas-instituicao/dashboard-instituicao/usuarios-cadastrados/usuarios-cadastrados.component';
import { MeuPerfilConsigComponent } from './paginas-instituicao/dashboard-instituicao/meu-perfil-consig/meu-perfil-consig.component';
import { PaginaInicialInstComponent } from './paginas-instituicao/dashboard-instituicao/pagina-inicial-inst/pagina-inicial-inst.component';
import { MeuPerfilComponent } from './paginas/dashboard/meu-perfil/meu-perfil.component';
import { DashboardInstituicaoComponent } from './paginas-instituicao/dashboard-instituicao/dashboard-instituicao.component';
import { SimulacaoComponent } from './paginas/dashboard/simulacao/simulacao.component';
import { PaginaInicialComponent } from './paginas/dashboard/pagina-inicial/pagina-inicial.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { EsqueceuSenhaComponent } from './paginas/esqueceu-senha/esqueceu-senha.component';
import { CadastroUsuarioInstitucionalComponent } from './paginas/cadastro-usuario-institucional/cadastro-usuario-institucional.component';
import { LoginComponent } from './paginas/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroNovaSenhaComponent } from './paginas/cadastro-nova-senha/cadastro-nova-senha.component';
import { PotosAtendimentoComponent } from './paginas-instituicao/dashboard-instituicao/potos-atendimento/potos-atendimento.component';
import { Simulacao2Component } from './paginas/dashboard/simulacao2/simulacao2.component';
import { HistoricoContratoComponent } from './paginas/dashboard/historico-contrato/historico-contrato.component';
// tslint:disable-next-line: max-line-length
import { AverbarNovoContratoComponent } from './paginas-instituicao/dashboard-instituicao/averbacoes/averbar-novo-contrato/averbar-novo-contrato.component';
import { ContratoComponent } from './paginas-instituicao/dashboard-instituicao/averbacoes/contrato.component';
import { DetalhamentoContComponent } from './paginas-instituicao/dashboard-instituicao/detalhamento-cont/detalhamento-cont.component';
import { ConsignatariaComponent } from './paginas/dashboard/consignataria/consignataria.component';


const routes: Routes = [
  /* Rotas de usuarios comuns */

    { path: '', component: LoginComponent },

  { path: 'cadastro', component: CadastroUsuarioInstitucionalComponent },
  { path: 'esqueceu-senha', component: EsqueceuSenhaComponent },
  { path: 'cadastro-nova-senha', component: CadastroNovaSenhaComponent },
  { path: 'dashboard', component: DashboardComponent, children: [

    { path: '', component: PaginaInicialComponent },
    { path: 'simulacao', component: SimulacaoComponent },
    { path: 'simulacao-dois', component: Simulacao2Component },
    { path: 'meu-perfil', component: MeuPerfilComponent },
    { path: 'historico-contrato', component: HistoricoContratoComponent },
    { path: 'detalhamento-contrato', component: DetContratoComponent },
    { path: 'consignataria', component: ConsignatariaComponent },

  ] },
  /* Rotas de usuarios comuns */






  /* Rotas instituição */
  /* DASHBOARD */
  { path: 'dashboard-instituicao', component: DashboardInstituicaoComponent, children: [
    { path: '', component: PaginaInicialInstComponent },
    { path: 'meu-perfil', component: MeuPerfilConsigComponent },
    { path: 'usuarios', component: UsuariosCadastradosComponent },
    { path: 'averbacoes', component: AverbacoesComponent },
    { path: 'averbar-novo-contrato', component: AverbarNovoContratoComponent },
    { path: 'contrato-averb', component: ContratoComponent },
    { path: 'contrato-detalhes', component: DetalhamentoContComponent },
    { path: 'resumo-contrato', component: ResumoContratoComponent },
    { path: 'resumo-proposta', component: PropostaResumoComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'portabilidade', component: PortabilidadeComponent },
    { path: 'proposta', component: PropostaComponent },
    { path: 'pesquisa-contrato', component: PesquisaPorContratoComponent },
    { path: 'postos-atendimento', component: PotosAtendimentoComponent },

  ] },
  /* Rotas instituição */


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
