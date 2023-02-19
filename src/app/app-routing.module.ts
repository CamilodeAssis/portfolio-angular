import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { QualificacoesComponent } from './components/qualificacoes/qualificacoes.component';
import { SobreComponent } from './components/sobre/sobre.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent 
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
export class AppRoutingModule { 
  
}
