import { Component } from '@angular/core';
import { faLightbulb, faDatabase, faFileCode } from '@fortawesome/free-solid-svg-icons'; 

import { backSkill, softSkill, frontSkill } from '../../core/data/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  isLoaded = false;

  faLightbulb = faLightbulb;
  faDatabase = faDatabase;
  faFileCode = faFileCode;

  dataBack: any = [];
  front: any = [];
  soft: any = [];

  constructor() {  }

  ngOnInit() {
    this.dataBack = backSkill;
    this.front = frontSkill;
    this.soft = softSkill; 
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  
  


 }
