import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroUsuarioInstitucionalComponent } from './paginas/cadastro-usuario-institucional/cadastro-usuario-institucional.component';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { EsqueceuSenhaComponent } from './paginas/esqueceu-senha/esqueceu-senha.component';
import { CadastroNovaSenhaComponent } from './paginas/cadastro-nova-senha/cadastro-nova-senha.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { PaginaInicialComponent } from './paginas/dashboard/pagina-inicial/pagina-inicial.component';
import { SimulacaoComponent } from './paginas/dashboard/simulacao/simulacao.component';
import { MeuPerfilComponent } from './paginas/dashboard/meu-perfil/meu-perfil.component';
import { DashboardInstituicaoComponent } from './paginas-instituicao/dashboard-instituicao/dashboard-instituicao.component';
import { PaginaInicialInstComponent } from './paginas-instituicao/dashboard-instituicao/pagina-inicial-inst/pagina-inicial-inst.component';
import { MeuPerfilConsigComponent } from './paginas-instituicao/dashboard-instituicao/meu-perfil-consig/meu-perfil-consig.component';
import { UsuariosCadastradosComponent } from './paginas-instituicao/dashboard-instituicao/usuarios-cadastrados/usuarios-cadastrados.component';
import {MatTableModule} from '@angular/material/table';
import { PotosAtendimentoComponent } from './paginas-instituicao/dashboard-instituicao/potos-atendimento/potos-atendimento.component';
import { FormPostoAtendimentoComponent } from './paginas-instituicao/dashboard-instituicao/form-posto-atendimento/form-posto-atendimento.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AverbacoesComponent } from './paginas-instituicao/dashboard-instituicao/averbacoes/averbacoes.component';
import { Simulacao2Component } from './paginas/dashboard/simulacao2/simulacao2.component';
import { HistoricoContratoComponent } from './paginas/dashboard/historico-contrato/historico-contrato.component';
import {MatListModule} from '@angular/material/list';
import { CaixaDadosComponent } from './paginas-instituicao/componentes/caixa-dados/caixa-dados.component';
import { AverbarNovoContratoComponent } from './paginas-instituicao/dashboard-instituicao/averbacoes/averbar-novo-contrato/averbar-novo-contrato.component';
import { ContratoComponent } from './paginas-instituicao/dashboard-instituicao/averbacoes/contrato.component';
import { ResumoContratoComponent } from './paginas-instituicao/dashboard-instituicao/averbacoes/resumo-contrato/resumo-contrato.component';
import { DadosNovoContratoComponent } from './paginas-instituicao/componentes/dados-novo-contrato/dados-novo-contrato.component';
import { Popup1Component } from './paginas-instituicao/dashboard-instituicao/averbacoes/averbar-novo-contrato/popup1/popup1.component';
import { Popup2Component } from './paginas-instituicao/dashboard-instituicao/averbacoes/averbar-novo-contrato/popup2/popup2.component';
import { PedidosComponent } from './paginas-instituicao/dashboard-instituicao/pedidos/pedidos.component';
import { DetContratoComponent } from './paginas/dashboard/det-contrato/det-contrato.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DetalhesContComponent } from './paginas-instituicao/dashboard-instituicao/averbacoes/averbar-novo-contrato/detalhes-cont/detalhes-cont.component';
import { PortabilidadeComponent } from './paginas-instituicao/dashboard-instituicao/portabilidade/portabilidade.component';
import { DetalhamentoContComponent } from './paginas-instituicao/dashboard-instituicao/detalhamento-cont/detalhamento-cont.component';
import { PropostaComponent } from './paginas-instituicao/dashboard-instituicao/proposta/proposta.component';
import { PesquisaPorContratoComponent } from './paginas-instituicao/dashboard-instituicao/pesquisa-por-contrato/pesquisa-por-contrato.component';
import { PropostaResumoComponent } from './paginas-instituicao/dashboard-instituicao/proposta-resumo/proposta-resumo.component';
import { SuspenderContratoComponent } from './paginas-instituicao/dashboard-instituicao/suspender-contrato/suspender-contrato.component';
import { ConsignatariaComponent } from './paginas/dashboard/consignataria/consignataria.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioInstitucionalComponent,
    EsqueceuSenhaComponent,
    CadastroNovaSenhaComponent,
    DashboardComponent,
    PaginaInicialComponent,
    SimulacaoComponent,
    MeuPerfilComponent,
    DashboardInstituicaoComponent,
    PaginaInicialInstComponent,
    MeuPerfilConsigComponent,
    UsuariosCadastradosComponent,
    PotosAtendimentoComponent,
    FormPostoAtendimentoComponent,
    AverbacoesComponent,
    Simulacao2Component,
    ContratoComponent,
    HistoricoContratoComponent,
    AverbarNovoContratoComponent,
    CaixaDadosComponent,
    ResumoContratoComponent,
    DadosNovoContratoComponent,
    Popup1Component,
    Popup2Component,
    PedidosComponent,
    DetContratoComponent,
    DetalhesContComponent,
    PortabilidadeComponent,
    DetalhamentoContComponent,
    PropostaComponent,
    PesquisaPorContratoComponent,
    PropostaResumoComponent,
    SuspenderContratoComponent,
    ConsignatariaComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatListModule,
    MatCheckboxModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
