import { Component } from '@angular/core';

@Component({
  selector: 'app-type-effect',
  templateUrl: './type-effect.component.html',
  styleUrls: ['./type-effect.component.css'],
})
export class TypeEffectComponent {
  textArray: string[] = [
    `Desenvolvedor Web ${" "} ${" "}${" "}${" "} ${" "}${" "}${" "}${" "}`,
    `Desenvolvedor FullStack ${" "} ${" "}${" "}${" "} ${" "}${" "}${" "}${" "}`,
    `Apaixonado por Técnologia${" "} ${" "}${" "}${" "} ${" "}${" "}${" "}${" "}`,
  ];
  currentText = '';
  textIndex = 0;
  currentCharIndex = 0;
  showCursor = true;

  ngOnInit() {
    this.startTyping();
    
  }

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
