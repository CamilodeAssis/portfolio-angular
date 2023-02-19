import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosCardComponent } from './projetos-card/projetos-card.component';



@NgModule({
  declarations: [
    ProjetosCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjetosCardComponent
  ]
})
export class ProjetosModule {
  
 }
