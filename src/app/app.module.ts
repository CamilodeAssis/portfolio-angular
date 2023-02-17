import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { QualificacoesComponent } from './qualificacoes/qualificacoes.component';
import { ContatoComponent } from './contato/contato.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjetoDetalhesComponent } from './projetos/projeto-detalhes/projeto-detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SobreComponent,
    ProjetosComponent,
    QualificacoesComponent,
    ContatoComponent,
    ProjetoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
