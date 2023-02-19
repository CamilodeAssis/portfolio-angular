import { Component } from '@angular/core';
import { ProjetosService } from 'src/app/core/data/projetos.service';
import { Projeto } from 'src/app/core/types/dataProjetosType';


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent {
  isLoaded = false;

  projetos: Projeto[] = [];

  constructor(private projetosService: ProjetosService) {}

  ngOnInit() {
    this.projetos = this.projetosService.getProjetos();
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
}
