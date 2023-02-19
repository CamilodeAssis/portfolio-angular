import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProjetosModule } from './components/projetos/projetos.module';
import { ContatoComponent } from './components/contato/contato.component';
import { QualificacoesComponent } from './components/qualificacoes/qualificacoes.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { TypeEffectComponent } from './components/type-effect/type-effect.component';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProjetosComponent,
    QualificacoesComponent,
    ContatoComponent,
    SobreComponent,
    FooterComponent,
    TypeEffectComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule,
    ProjetosModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
