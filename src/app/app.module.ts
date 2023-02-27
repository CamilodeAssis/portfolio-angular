import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProjetosModule } from './components/projetos/projetos.module';
import { QualificacoesComponent } from './components/qualificacoes/qualificacoes.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { TypeEffectComponent } from './components/type-effect/type-effect.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillCardComponent } from './components/skills/skill-card/skill-card.component';
import { QualiCardComponent } from './components/qualificacoes/quali-card/quali-card.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FormDebugComponent } from './components/contato/form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProjetosComponent,
    QualificacoesComponent,
    SobreComponent,
    FooterComponent,
    TypeEffectComponent,
    SkillsComponent,
    SkillCardComponent,
    QualiCardComponent,
    ContatoComponent,
    FormDebugComponent,
    PaginaNaoEncontradaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule,
    ProjetosModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
