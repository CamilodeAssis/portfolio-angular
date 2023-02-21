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
  @Input() data!: Quali[];
  @Input() iconSchoolOrWork!: IconDefinition;
  @Input() iconCalendar!: IconDefinition;

  selected: string = 'Minhas Qualificações e Experiências';
  option: string = '';
  isClicked: boolean = false;
  @Output() selectedOption = new EventEmitter<string>();
  @Output() descOption = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      const dataChange = changes['data'];
      const currentData = dataChange.currentValue;
      const previousData = dataChange.previousValue;
      this.selectedOption.emit(this.selected);
      this.descOption.emit(this.option);
    }
  }

  setIsClick() {
    this.isClicked = !this.isClicked;
  }

  onDesc(option: string) {
    this.option = option;
    this.descOption.emit(option);
  }

  onSelected(option: string) {
    this.selected = option;
    this.selectedOption.emit(option);
  }
}
