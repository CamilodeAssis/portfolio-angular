import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '*',
        opacity: 1,
      })),
      state('out', style({
        height: '0',
        opacity: 0,
      })),
      transition('in <=> out', [
        animate('0.5s ease-out'),
      ]),
    ]),
  ],
})
export class SkillCardComponent {

  faChevronDown = faChevronDown;

  @Input( )  icone!: any
 


  @Input() data: any= [];
  @Input() skill!: string;


  isLoaded: boolean = true;

  setIsLoaded(){
    this.isLoaded = !this.isLoaded;
  }

}
