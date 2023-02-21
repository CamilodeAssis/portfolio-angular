import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
  IconDefinition,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent {
  // atribuindo  icones
  faLinkedin: IconDefinition = faLinkedin;
  faGithub: IconDefinition = faGithub;
  faInstagram: IconDefinition = faInstagram;
  faFacebook: IconDefinition = faFacebook;
  faWhatsapp: IconDefinition = faWhatsapp;
  faEnvelope: IconDefinition = faEnvelope;

  isLoaded: boolean = false;

  formulario!: FormGroup;

  private httpSubscription!: Subscription;

  map = map;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
      mensagem: new FormControl(null),
    });
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }


  onSubmit() {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
    this.httpSubscription = this.http
      .post(
        'https://63f4099d864fb1d60020fc4c.mockapi.io/api/desafioFrontend/senEmail',
        JSON.stringify(this.formulario.value)
      )
      .pipe(map((res: any) => res))
      .subscribe((dados: any) => console.log(dados));
  }


  ngOnDestroy() {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
  }
  
}
