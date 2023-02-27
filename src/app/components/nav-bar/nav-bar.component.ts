import { Component, EventEmitter, Input, Output } from '@angular/core';

import { faBars, faXmark, IconDefinition, faMoon } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  // atribuindo  icones
  faBars: IconDefinition = faBars;
  isLoaded: boolean = false;
  faXmark: IconDefinition = faXmark;
 // atribuindo  icones com svg
  sun= '/assets/images/sun.svg';
  moon= '/assets/images/moon-fill.svg'
  
  //recebendo valor do componente pai para mudar o tema
  @Input( ) isLightTheme!: boolean

  // emitindo evento para o component pai manipular o tema  
  @Output() toggleTheme = new EventEmitter<void>();

  //executando a animação quando a rota é carregada
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  // variavel para definir o menu mobile
  isMenuVisible: boolean = false;

  //metodo para mudar o estado da variavel que define o menu mobile
  changeClass(){
    this.isMenuVisible =!this.isMenuVisible;
  }


}
