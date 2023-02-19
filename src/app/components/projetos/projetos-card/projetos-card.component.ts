import { Component, HostBinding, HostListener, Input} from '@angular/core';

@Component({
  selector: 'projetos-card',
  templateUrl: './projetos-card.component.html',
  styleUrls: ['./projetos-card.component.css']
})
export class ProjetosCardComponent {
    isMouseOver: boolean = false;

   @Input() name!: string;
   @Input() description!: string;
   @Input() img!: string;
   @Input() icons!: string[];
   @Input() link!: string;
   @Input() type!: string;

   @HostBinding('style.backgroundImage')
   get backgroundImage() {
     return 'url("https://www.example.com/minha-imagem.jpg")';
   }
 
   @HostListener('mouseover')
   onMouseOver() {
     this.isMouseOver = true;
   }
 
   @HostListener('mouseout')
   onMouseOut() {
     this.isMouseOver = false;
   }

}
