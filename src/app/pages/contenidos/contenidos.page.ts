import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenidos',
  templateUrl: './contenidos.page.html',
  styleUrls: ['./contenidos.page.scss'],
})
export class ContenidosPage implements OnInit 
{

  contenidos =
  [
    {
      image: '../assets/images/contenido/contenido_1.jpg',
      title: '¿Qué es?',
    },
    {
      image: '../assets/images/contenido/contenido_2.jpg',
      title: 'Principios clave',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
