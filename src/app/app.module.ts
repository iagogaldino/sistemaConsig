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
import { OrdemJudicialComponent } from './paginas-instituicao/dashboard-instituicao/ordem-judicial/ordem-judicial.component';
import { CancelarContratoComponent } from './paginas-instituicao/dashboard-instituicao/cancelar-contrato/cancelar-contrato.component';
import { LiquidarComponent } from './paginas-instituicao/dashboard-instituicao/liquidar/liquidar.component';
import { RefinanciarComponent } from './paginas-instituicao/dashboard-instituicao/refinanciar/refinanciar.component';
import { DadosContratoComponent } from './paginas-instituicao/componentes/dados-contrato/dados-contrato.component';
import { BoxDetalhamentoComponent } from './paginas-instituicao/componentes/box-detalhamento/box-detalhamento.component';
import { RefinanciarResumoComponent } from './paginas-instituicao/dashboard-instituicao/refinanciar-resumo/refinanciar-resumo.component';
import { BoxDadosAverbServidorComponent } from './paginas-instituicao/componentes/box-dados-averb-servidor/box-dados-averb-servidor.component';
import { DashboardOrgaoComponent } from './paginas-orgao/dashboard-orgao/dashboard-orgao.component';
import { PaginaInicialOrgaoComponent } from './paginas-orgao/pagina-inicial-orgao/pagina-inicial-orgao.component';
import { PortabilidadesComponent } from './paginas-orgao/portabilidades/portabilidades.component';
import { MeuPerfilGestaoComponent } from './paginas-orgao/meu-perfil-gestao/meu-perfil-gestao.component';
import { UsuariosGestaoComponent } from './paginas-orgao/usuarios-gestao/usuarios-gestao.component';
import {MatChipsModule} from '@angular/material/chips';
import { AverbacaoGestaoComponent } from './paginas-orgao/averbacao-gestao/averbacao-gestao.component';
import { DescontoEmFolhaInstituicaoComponent } from './paginas-instituicao/dashboard-instituicao/desconto-em-folha-instituicao/desconto-em-folha-instituicao.component';
import { PerfilOrgaoComponent } from './paginas-orgao/perfil-orgao/perfil-orgao.component';
import { DatalhesAverbacaoOrgaoComponent } from './paginas-orgao/datalhes-averbacao-orgao/datalhes-averbacao-orgao.component';
import { MovimentacoesInstituicaoComponent } from './paginas-instituicao/dashboard-instituicao/movimentacoes-instituicao/movimentacoes-instituicao.component';
import { DetContratoOrgaoComponent } from './paginas-orgao/det-contrato-orgao/det-contrato-orgao.component';
import { DetalhamentoContratoOrgaoComponent } from './paginas-orgao/detalhamento-contrato-orgao/detalhamento-contrato-orgao.component';
import { LogOperacoesComponent } from './paginas-orgao/log-operacoes/log-operacoes.component';
import { RealocarMargemOrgaoComponent } from './paginas-orgao/realocar-margem-orgao/realocar-margem-orgao.component';
import { RepasseInstituicaoComponent } from './paginas-instituicao/dashboard-instituicao/repasse-instituicao/repasse-instituicao.component';
import { AuditoriaInstituicaoComponent } from './paginas-instituicao/dashboard-instituicao/auditoria-instituicao/auditoria-instituicao.component';
import { PortabilidadeOrgaoComponent } from './paginas-orgao/portabilidade-orgao/portabilidade-orgao.component';
import { ReservasOrgaoComponent } from './paginas-orgao/reservas-orgao/reservas-orgao.component';
import { DetalhesReservaOrgaoComponent } from './paginas-orgao/detalhes-reserva-orgao/detalhes-reserva-orgao.component';

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
    OrdemJudicialComponent,
    CancelarContratoComponent,
    LiquidarComponent,
    RefinanciarComponent,
    DadosContratoComponent,
    BoxDetalhamentoComponent,
    RefinanciarResumoComponent,
    BoxDadosAverbServidorComponent,
    DashboardOrgaoComponent,
    PaginaInicialOrgaoComponent,
    PortabilidadesComponent,
    MeuPerfilGestaoComponent,
    UsuariosGestaoComponent,
    AverbacaoGestaoComponent,
    DescontoEmFolhaInstituicaoComponent,
    PerfilOrgaoComponent,
    DatalhesAverbacaoOrgaoComponent,
    MovimentacoesInstituicaoComponent,
    DetContratoOrgaoComponent,
    DetalhamentoContratoOrgaoComponent,
    LogOperacoesComponent,
    RealocarMargemOrgaoComponent,
    RepasseInstituicaoComponent,
    AuditoriaInstituicaoComponent,
    PortabilidadeOrgaoComponent,
    ReservasOrgaoComponent,
    DetalhesReservaOrgaoComponent,
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
    ChartsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
