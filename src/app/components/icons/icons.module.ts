import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



@NgModule({
  exports: [FontAwesomeModule],
 
})
export class IconsModule { 

  constructor(library: FaIconLibrary) {
  
    library.addIcons(faGithub, faLinkedin);
    
  }
}
