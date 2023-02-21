import { Injectable } from '@angular/core';
import { Projeto } from '../types/dataProjetosType';

@Injectable({
  providedIn: 'root',
})
export class DataProjetos {
  projetos: Projeto[] = [
    {
      name: 'Smart Store 1.0',
      description:
        'Aplicatico web para E-commerce desenvolvido com ReactJs, Typescript, TailwindCSS, NodeJs e MySQL.',
      type: 'React',
      img: 'assets/images/projects/smartStore.png',
      icons: [
        'assets/images/svg/react.svg',
        'assets/images/svg/typescript.svg',
        'assets/images/svg/tailwind.svg',
        'assets/images/svg/nodejs.svg',
        'assets/images/svg/mysql.svg',
      ],
      link: 'https://github.com/CamilodeAssis/Smart-Store-1.0',
    },
    {
      name: 'Portfólio pessoal v2.0',
      description:
        'Portfólio pessoal desenvolvido com Angular, Typescript e CSS.',
      type: 'React',
      img: 'assets/images/projects/portfolio2.png',
      icons: [
        'assets/images/svg/typescript.svg',
        'assets/images/svg/angular.svg',
        'assets/images/svg/css.svg',
      ],
      link: 'https://github.com/CamilodeAssis/portfolio-angular',
    },
    {
      name: 'Jogo da memória',
      description:
        'Jogo da memória desenvolvido com ReactJs, Typescript e TailwindCSS',
      type: 'React',
      img: 'assets/images/projects/memorygame.png',
      icons: [
        'assets/images/svg/react.svg',
        'assets/images/svg/typescript.svg',
        'assets/images/svg/tailwind.svg',
      ],
      link: 'https://github.com/CamilodeAssis/game-react-ts',
    },
    {
      name: 'Calculadora de IMC',
      description:
        'Calculadora de imc desenvolvida com ReactJS, Typescript e TailwindCSS',
      type: 'React',
      img: 'assets/images/projects/imc.png',
      icons: [
        'assets/images/svg/react.svg',
        'assets/images/svg/typescript.svg',
        'assets/images/svg/tailwind.svg',
      ],
      link: 'https://github.com/CamilodeAssis/calculadora-imc-react',
    },

    {
      name: 'Loja de roupas',
      description: 'Página web desenvolvida com Javascript, HTML e CSS',
      type: 'Javascript',
      img: 'assets/images/projects/loja.png',
      icons: [
        'assets/images/svg/javascript.svg',
        'assets/images/svg/html.svg',
        'assets/images/svg/css.svg',
      ],
      link: 'https://github.com/CamilodeAssis/Projeto-loja-com-carrinho-de-compras-Javascript-',
    },
    {
      name: 'Urna eletrônica',
      description:
        'Simulador da urna eletrônica desenvolvido com Javascript, HTML e CSS',
      type: 'Javascript',
      img: 'assets/images/projects/urna.png',
      icons: [
        'assets/images/svg/javascript.svg',
        'assets/images/svg/html.svg',
        'assets/images/svg/css.svg',
      ],
      link: 'https://github.com/CamilodeAssis/urna-eletronica-js',
    },
  ];
}
