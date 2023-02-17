import { Component } from '@angular/core';


import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
  
})
export class SobreComponent {

  faLinkedin = faLinkedin
  faGithub = faGithub

  srcImg: string = '/assets/images/eupbdetail.png';
 
 
}
