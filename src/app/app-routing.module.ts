import { RepositorioArquivosOrgaoComponent } from './paginas-orgao/repositorio-arquivos-orgao/repositorio-arquivos-orgao.component';
import { PostosAtendimentoOrgaoComponent } from './paginas-orgao/postos-atendimento-orgao/postos-atendimento-orgao.component';
import { ProdutosOrgaoComponent } from './paginas-orgao/produtos-orgao/produtos-orgao.component';
import { ConsignatariasOrgaoComponent } from './paginas-orgao/consignatarias-orgao/consignatarias-orgao.component';
import { MarktshareOrgaoComponent } from './paginas-orgao/marktshare-orgao/marktshare-orgao.component';
import { MargemOrgaoComponent } from './paginas-orgao/margem-orgao/margem-orgao.component';
import { AuditoriaOrgaoComponent } from './paginas-orgao/auditoria-orgao/auditoria-orgao.component';
import { MovimentacoesOrgaoComponent } from './paginas-orgao/movimentacoes-orgao/movimentacoes-orgao.component';
import { DescontoFolhaOrgaoComponent } from './paginas-orgao/desconto-folha-orgao/desconto-folha-orgao.component';
import { ContratosOrgaoComponent } from './paginas-orgao/contratos-orgao/contratos-orgao.component';
import { AdicionarOrdemJudicialOrgaoComponent } from './paginas-orgao/adicionar-ordem-judicial-orgao/adicionar-ordem-judicial-orgao.component';
import { OrdemJudicialOrgaoComponent } from './paginas-orgao/ordem-judicial-orgao/ordem-judicial-orgao.component';
import { OrdemJudicialComponent } from './paginas-instituicao/dashboard-instituicao/ordem-judicial/ordem-judicial.component';
import { ReservasOrgaoComponent } from './paginas-orgao/reservas-orgao/reservas-orgao.component';
import { RealocarMargemOrgaoComponent } from './paginas-orgao/realocar-margem-orgao/realocar-margem-orgao.component';
import { MeuPerfilGestaoComponent } from './paginas-orgao/meu-perfil-gestao/meu-perfil-gestao.component';
import { AverbacaoGestaoComponent } from './paginas-orgao/averbacao-gestao/averbacao-gestao.component';
import { UsuariosGestaoComponent } from './paginas-orgao/usuarios-gestao/usuarios-gestao.component';
import { PaginaInicialOrgaoComponent } from './paginas-orgao/pagina-inicial-orgao/pagina-inicial-orgao.component';
import { RefinanciarResumoComponent } from './paginas-instituicao/dashboard-instituicao/refinanciar-resumo/refinanciar-resumo.component';
import { RefinanciarComponent } from './paginas-instituicao/dashboard-instituicao/refinanciar/refinanciar.component';
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
import { DashboardOrgaoComponent } from './paginas-orgao/dashboard-orgao/dashboard-orgao.component';
import { DescontoEmFolhaInstituicaoComponent } from './paginas-instituicao/dashboard-instituicao/desconto-em-folha-instituicao/desconto-em-folha-instituicao.component';
import { DatalhesAverbacaoOrgaoComponent } from './paginas-orgao/datalhes-averbacao-orgao/datalhes-averbacao-orgao.component';
import { MovimentacoesInstituicaoComponent } from './paginas-instituicao/dashboard-instituicao/movimentacoes-instituicao/movimentacoes-instituicao.component';
import { DetalhamentoContratoOrgaoComponent } from './paginas-orgao/detalhamento-contrato-orgao/detalhamento-contrato-orgao.component';
import { RepasseInstituicaoComponent } from './paginas-instituicao/dashboard-instituicao/repasse-instituicao/repasse-instituicao.component';
import { AuditoriaInstituicaoComponent } from './paginas-instituicao/dashboard-instituicao/auditoria-instituicao/auditoria-instituicao.component';
import { PortabilidadeOrgaoComponent } from './paginas-orgao/portabilidade-orgao/portabilidade-orgao.component';
import { DetalhesReservaOrgaoComponent } from './paginas-orgao/detalhes-reserva-orgao/detalhes-reserva-orgao.component';
import { ManutencaoInstituicaoComponent } from './paginas-instituicao/dashboard-instituicao/manutencao-instituicao/manutencao-instituicao.component';
import { CarteiraOrgaoComponent } from './paginas-orgao/carteira-orgao/carteira-orgao.component';
import { ConsignatariasManutencaoOrgaoComponent } from './paginas-orgao/consignatarias-manutencao-orgao/consignatarias-manutencao-orgao.component';
import { ServidoresOrgaoComponent } from './paginas-orgao/servidores-orgao/servidores-orgao.component';
import { DadosServidorOrgaoComponent } from './paginas-orgao/dados-servidor-orgao/dados-servidor-orgao.component';




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
    { path: 'movimentacoes-instituicao', component: MovimentacoesInstituicaoComponent },

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
    { path: 'refinanciar', component: RefinanciarComponent },
    { path: 'refinanciar-resumo', component: RefinanciarResumoComponent },
    { path: 'desconto-em-folha-instituicao', component: DescontoEmFolhaInstituicaoComponent },
    { path: 'movimentacoes-instituicao', component: MovimentacoesInstituicaoComponent },
    { path: 'repasse-instituicao', component: RepasseInstituicaoComponent },
    { path: 'auditoria-instituicao', component: AuditoriaInstituicaoComponent },
    { path: 'manutencao-instituicao', component: ManutencaoInstituicaoComponent },
  ] },
  /* Rotas instituição */






  /* Rotas Orgao */
  { path: 'dashboard-orgao', component: DashboardOrgaoComponent, children: [
    { path: '', component: PaginaInicialOrgaoComponent },
    { path: 'usuarios', component: UsuariosGestaoComponent },
    { path: 'portabilidade', component: PortabilidadeOrgaoComponent },
    { path: 'averbacoes', component: AverbacaoGestaoComponent },
    { path: 'detalhes-averbacoes', component: DatalhesAverbacaoOrgaoComponent },
    { path: 'meuperfil', component: MeuPerfilGestaoComponent },
    { path: 'detalhamento-contrato', component: DetalhamentoContratoOrgaoComponent },
    { path: 'realocar-margem', component: RealocarMargemOrgaoComponent },
    { path: 'reservas', component: ReservasOrgaoComponent },
    { path: 'detalhes-reserva', component: DetalhesReservaOrgaoComponent},
    { path: 'ordem-judicial', component: OrdemJudicialOrgaoComponent},
    { path: 'adicionar-ordem-judicial', component: AdicionarOrdemJudicialOrgaoComponent},
    { path: 'contratos', component: ContratosOrgaoComponent},
    { path: 'desconto-folha', component: DescontoFolhaOrgaoComponent},
    { path: 'movimentacoes', component: MovimentacoesOrgaoComponent},
    { path: 'repasse', component: RepasseInstituicaoComponent},
    { path: 'auditoria', component: AuditoriaOrgaoComponent },
    { path: 'carteira', component: CarteiraOrgaoComponent },
    { path: 'margem', component: MargemOrgaoComponent },
    { path: 'marketshare', component: MarktshareOrgaoComponent },
    { path: 'consignatarias', component: ConsignatariasOrgaoComponent },
    { path: 'manutencao-consignatarias', component: ConsignatariasManutencaoOrgaoComponent },
    { path: 'servidores', component: ServidoresOrgaoComponent },
    { path: 'dados-servidor', component: DadosServidorOrgaoComponent },
    { path: 'produtos', component: ProdutosOrgaoComponent },
    { path: 'postos-atendimento', component: PostosAtendimentoOrgaoComponent },
    { path: 'repositorio-arquivos', component: RepositorioArquivosOrgaoComponent },
  ] },
  /* Rotas Orgao */


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
