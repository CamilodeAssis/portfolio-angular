import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  //variavel para controlar as animações quando a rota é carregada
  isLoaded: boolean = false;

  //variavel formulario
  formulario!: FormGroup;

  private httpSubscription!: Subscription;

  map = map;
  constructor(private http: HttpClient) {}


  //criando formulario ao iniciar o component e executando a animação quando a rota é carregada
  ngOnInit() {
    this.formulario = new FormGroup({
      acessKey: new FormControl('6e344945-b08b-4cfe-b5e9-3a9227959230'),
      name: new FormControl(null),
      email: new FormControl(null),
      message: new FormControl(null),
    });
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  // metodo para fazer requisição a API de email 
  onSubmit() {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }

    const url = 'https://api.sendinblue.com/v3/smtp/email';

    const body = {
      sender: {
        name: this.formulario.value.name,
        email: this.formulario.value.email,
      },
      to: [{ email: 'camilo.assis10@gmail.com' }],
      subject: 'Mensagem enviada do formulário de contato',
      textContent: this.formulario.value.message,
    };

    const headers = {
      'Content-Type': 'application/json',
      'api-key':
        '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',
    };
    this.http.post(url, body, { headers }).subscribe(
      (res) => {
        this.formulario.reset();
      },
      (err) => {
        console.log(err);
      }
    );

    // if (this.httpSubscription) {
    //   this.httpSubscription.unsubscribe();
    // }

    // this.httpSubscription = this.http
    //   .post(
    //     'https://63f4099d864fb1d60020fc4c.mockapi.io/api/desafioFrontend/senEmail',
    //     JSON.stringify(this.formulario.value)
    //   )
    //   .pipe(map((res: any) => res))
    //   .subscribe((dados: any) => console.log(dados));
  }

  // "destruindo" a requisição e o formulario
  ngOnDestroy() {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
    this.formulario
  }
}
