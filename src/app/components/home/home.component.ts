import { Component } from '@angular/core';

import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  srcImg: string = '/assets/images/eupbdetail.png';



  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faFacebook = faFacebook;


  isLoaded = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
}
