import { Component } from '@angular/core';
import { dataQuali } from 'src/app/core/data/qualifications';
import { Quali } from 'src/app/core/types/dataQualiType';
@Component({
  selector: 'app-qualificacoes',
  templateUrl: './qualificacoes.component.html',
  styleUrls: ['./qualificacoes.component.css'],
})
export class QualificacoesComponent {
  quali: Quali[] = [];

  isLoaded: boolean = false;

  ngOnInit() {
    this.quali = dataQuali;
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
}
