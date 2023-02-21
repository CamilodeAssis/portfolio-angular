import { Component } from '@angular/core';

import { faBars, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  faBars: IconDefinition = faBars;
  isLoaded: boolean = false;
  faXmark: IconDefinition = faXmark;
  

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  isMenuVisible: boolean = false;

  changeClass(){
    this.isMenuVisible =!this.isMenuVisible;
  }


}
