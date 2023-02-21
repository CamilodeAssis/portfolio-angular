import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { faChevronDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Skills } from 'src/app/core/types/dataSkillsType ';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      state(
        'out',
        style({
          height: '0',
          opacity: 0,
        })
      ),
      transition('in <=> out', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class SkillCardComponent {
  //variavel para controlar as animações quando a rota é carregada
  isLoaded: boolean = false;

  // variavel para atribuir icone
  faChevronDown = faChevronDown;

  //recebendo icone do componente pai
  @Input() icone!: IconDefinition
  //recebendo data a ser renderizada do componente pai
  @Input() data!: Skills[]
  //recebendo tipo da skill a ser renderizada do componente pai
  @Input() skill!: string;

  //animação ao carregar a rota
  ngOnInit() {
    setTimeout(() => this.setIsLoaded(), 500);
  }
  //metodo para trocar o valor da variavel ao clicar no card da skill para fazer a transiçao
  setIsLoaded() {
    this.isLoaded = !this.isLoaded;
  }
}
