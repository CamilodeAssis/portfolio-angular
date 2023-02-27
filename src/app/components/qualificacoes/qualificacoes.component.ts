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
  //variaveis para armazenar o array de dados
  quali: Quali[] = [];
  exp: Exp[] = [];


  // atribuindo  icones
  faGraduationCap: IconDefinition = faGraduationCap;
  faCalendarCheck: IconDefinition = faCalendarCheck;
  faUserTie: IconDefinition = faUserTie

  //variaveis para exibir o componente filho condicionalmente
  isQuali: boolean = true;
  isExp: boolean = false;

  //variavel para controlar as animações quando a rota é carregada
  isLoaded: boolean = false;

  //variaveis para armazenar o valor do evento emitido pelo component filho
  name: string = 'Minhas Qualificações e Experiências';
  desc: string = '';
  isClicked: boolean = false;

  //metodo para definir a renderização condicional do componente filho
  setIsQuali(){
    this.isExp = false;
    this.isQuali = !this.isQuali;
  }
  //metodo para definir a renderização condicional do componente filho
  setIsExp(){
    this.isQuali = false;
    this.isExp = !this.isExp;
  }


  //metodo para definir renderização condicional
  setIsClicked(){
    this.isClicked = !this.isClicked;
  }

  
  ngOnInit() {
    this.quali = dataQuali;
    this.exp = dataExp;
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);

  }

  //metodo para pegar o valor emitido pelo filho e salvar na variavel desc
  onSelectedDesc(option: string) {
    this.desc = option;
}
//metodo para pegar o valor emitido pelo filho e salvar na variavel name
  onSelectedOption(option: string) {
    this.name = option;
  }


}
