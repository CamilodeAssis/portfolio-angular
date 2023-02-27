import { Component, HostBinding, HostListener, Input} from '@angular/core';

@Component({
  selector: 'projetos-card',
  templateUrl: './projetos-card.component.html',
  styleUrls: ['./projetos-card.component.css']
})
export class ProjetosCardComponent {
 
  
    isMouseOver: boolean = false;

    //recebendo dados do component Pai
   @Input() name!: string;
   @Input() description!: string;
   @Input() img!: string;
   @Input() icons!: string[];
   @Input() link!: string;
   @Input() type!: string;

   
  // escutando o evento do mouse pra aplicar um efeito no background
   @HostListener('mouseover')
   onMouseOver() {
     this.isMouseOver = true;
   }
 // escutando o evento do mouse pra aplicar um efeito no background
   @HostListener('mouseout')
   onMouseOut() {
     this.isMouseOver = false;
   }

}
