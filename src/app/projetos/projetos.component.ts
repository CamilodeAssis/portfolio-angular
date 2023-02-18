import { Component } from '@angular/core';
import { ProjetosService } from '../core/data/projetos.service';
import { Projeto } from '../core/types/dataProjetosType';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent {
  projetos: Projeto[] = [];

  constructor(private projetosService: ProjetosService) {}

  ngOnInit() {
    this.projetos = this.projetosService.getProjetos();
  }
}
