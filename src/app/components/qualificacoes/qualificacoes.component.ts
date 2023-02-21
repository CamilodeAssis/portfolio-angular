import { Component, Output, EventEmitter } from '@angular/core';
import { dataQuali, dataExp } from 'src/app/core/data/qualifications';
import { Quali, Exp } from 'src/app/core/types/dataQualiType';
import {
  faGraduationCap,
  faCalendarCheck,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-qualificacoes',
  templateUrl: './qualificacoes.component.html',
  styleUrls: ['./qualificacoes.component.css'],
})
export class QualificacoesComponent {
  quali: Quali[] = [];
  exp: Exp[] = [];
  
  faGraduationCap: IconDefinition = faGraduationCap;
  faCalendarCheck: IconDefinition = faCalendarCheck;
  faUserTie: IconDefinition = faUserTie

  isQuali: boolean = true;
  isExp: boolean = false;

  isLoaded: boolean = false;

  name: string = 'Qualificacões';

  setIsQuali(){
    this.isExp = false;
    this.isQuali = !this.isQuali;
  }
  setIsExp(){
    this.isQuali = false;
    this.isExp = !this.isExp;
  }


  ngOnInit() {
    this.quali = dataQuali;
    this.exp = dataExp;
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);

  }

  cardClicado(dado: Quali) {
      this.name = dado.type
      console.log(dado);
  }
}
