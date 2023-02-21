import { Component } from '@angular/core';
import { faLightbulb, faDatabase, faFileCode, IconDefinition } from '@fortawesome/free-solid-svg-icons'; 
import { Skills } from 'src/app/core/types/dataSkillsType ';

import { backSkill, softSkill, frontSkill } from '../../core/data/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  //variavel para controlar as animações quando a rota é carregada
  isLoaded = false;

  // atribuindo  icones
  faLightbulb: IconDefinition= faLightbulb;
  faDatabase: IconDefinition = faDatabase;
  faFileCode: IconDefinition = faFileCode;

  //arrays para armazenar data
  dataBack: Skills[] = [];
  front: Skills[] = [];
  soft: Skills[] = [];

  constructor() { }

  //setando os arrays importados  nas variaveis e executando a animação quando a rota é carregada
  ngOnInit() {
    this.dataBack = backSkill;
    this.front = frontSkill;
    this.soft = softSkill; 
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

 }
