import { Injectable } from '@angular/core';
import { DataProjetos } from '../data/projetos';
import { Projeto } from '../types/dataProjetosType';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  projetos: Projeto[] = [];

  constructor(private dataProjetos: DataProjetos) { 
    this.projetos = dataProjetos.projetos;
  }
 
  getProjetos() {
    return this.projetos;
  }
}
