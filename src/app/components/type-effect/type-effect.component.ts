import { Component } from '@angular/core';

@Component({
  selector: 'app-type-effect',
  templateUrl: './type-effect.component.html',
  styleUrls: ['./type-effect.component.css'],
})
export class TypeEffectComponent {
  //matriz de string a ser iterada
  textArray: string[] = [
    `Desenvolvedor Web ${" "} ${" "}${" "}${" "} ${" "}${" "}${" "}${" "}`,
    `Apaixonado por Técnologia${" "} ${" "}${" "}${" "} ${" "}${" "}${" "}${" "}`,
    `Desenvolvedor Front-End${" "} ${" "}${" "}${" "} ${" "}${" "}${" "}${" "}`,
  ];
  currentText = '';
  textIndex = 0;
  currentCharIndex = 0;
  showCursor = true;

  // iniciando o metodo ao carregar o componente
  ngOnInit() {
    this.startTyping();
    
  }

  //metodo para iterar sobre a matriz
  startTyping() {
      setInterval(() => {
        if (this.currentCharIndex < this.textArray[this.textIndex].length) {
          this.currentCharIndex++;
          this.currentText = this.textArray[this.textIndex].substring(
            0,
            this.currentCharIndex
          );
        } else {
            this.currentCharIndex = 0;
            this.currentText = '';
            this.textIndex = (this.textIndex + 1) % this.textArray.length  
        }
      }, 150);  
  }
}
