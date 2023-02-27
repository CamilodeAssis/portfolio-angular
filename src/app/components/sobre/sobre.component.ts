import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent {
  // atribuindo imagem a variavel
  imgSrc: string = '/assets/images/eu1.png';

  //variavel para controlar as animações quando a rota é carregada
  isLoaded = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
}
