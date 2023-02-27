import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Quali } from 'src/app/core/types/dataQualiType';

@Component({
  selector: 'app-quali-card',
  templateUrl: './quali-card.component.html',
  styleUrls: ['./quali-card.component.css'],
})
export class QualiCardComponent {

  //recebendo valores e icones do componente pai
  @Input() data!: Quali[];
  @Input() iconSchoolOrWork!: IconDefinition;
  @Input() iconCalendar!: IconDefinition;

  // emitindo eventos para o component pai
  selected: string = 'Minhas Qualificações e Experiências';
  option: string = '';
  isClicked: boolean = false;
  @Output() selectedOption = new EventEmitter<string>();
  @Output() descOption = new EventEmitter<string>();


  // metodo para renderizar condicionalmente
  setIsClick() {
    this.isClicked = !this.isClicked;
  }

  //metodo para emitir o valor para o componente pai
  onDesc(option: string) {
    this.option = option;
    this.descOption.emit(option);
  }

  //metodo para emitir o valor para o componente pai
  onSelected(option: string) {
    this.selected = option;
    this.selectedOption.emit(option);
  }
}
