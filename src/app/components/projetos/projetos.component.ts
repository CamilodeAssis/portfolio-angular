import { Component } from '@angular/core';
import { ProjetosService } from 'src/app/core/data/projetos.service';
import { Projeto } from 'src/app/core/types/dataProjetosType';


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent {
  //variavel para controlar as animações quando a rota é carregada
  isLoaded = false;
  //cariavel para armazenar o array recebido de data
  projetos: Projeto[] = [];

  constructor(private projetosService: ProjetosService) {}

  //setando o array com metedo importado do serviço  e executando a animação quando a rota é carregada
  ngOnInit() {
    this.projetos = this.projetosService.getProjetos();
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
}
