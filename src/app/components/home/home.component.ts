import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //atribuindo imagem importada para renderizar no component
  srcImg: string = '/assets/images/eupbdetail.png';

  //variavel para controlar o estado do tema
  lightMode!: boolean;

  constructor(public sanitizer: DomSanitizer) {}

  pdfUrl: string = '/assets/CamilodeAssis.pdf';

  // atribuindo  icones
  faLinkedin: IconDefinition = faLinkedin;
  faGithub: IconDefinition = faGithub;
  faInstagram: IconDefinition = faInstagram;
  faFacebook: IconDefinition = faFacebook;
  faDownload: IconDefinition = faDownload;

  //variavel para controlar as animações quando a rota é carregada
  isLoaded = false;

  //executando a animação quando a rota é carregada
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
}
