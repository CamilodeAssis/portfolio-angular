import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { QualificacoesComponent } from './components/qualificacoes/qualificacoes.component';
import { SkillsComponent } from './components/skills/skills.component';

import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },

  {
    path: 'projetos',
    component: ProjetosComponent,
  },
  {
    path: 'qualificações',
    component: QualificacoesComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
