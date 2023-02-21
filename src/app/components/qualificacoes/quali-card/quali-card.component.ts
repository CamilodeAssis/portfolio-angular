
import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Quali } from 'src/app/core/types/dataQualiType';

@Component({
  selector: 'app-quali-card',
  templateUrl: './quali-card.component.html',
  styleUrls: ['./quali-card.component.css']
})
export class QualiCardComponent {
  name: string = ''

  @Input() data!: Quali[]
  @Input() iconSchoolOrWork!: IconDefinition
  @Input() iconCalendar!: IconDefinition

  @Output() cardClicado = new EventEmitter<Quali>();

  
  emitirEvento(dado: Quali) {
    this.cardClicado.emit(dado);
  }
 
}
