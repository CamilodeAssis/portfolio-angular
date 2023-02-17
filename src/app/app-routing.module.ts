import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { ProjetoDetalhesComponent } from './projetos/projeto-detalhes/projeto-detalhes.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { QualificacoesComponent } from './qualificacoes/qualificacoes.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: SobreComponent 
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent 
  },
  {
    path: 'projeto/:name',
    component: ProjetoDetalhesComponent 
  },
  {
    path: 'qualificações',
    component: QualificacoesComponent 
  },
  {
    path: 'contato',
    component: ContatoComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
