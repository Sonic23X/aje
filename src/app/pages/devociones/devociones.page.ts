import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devociones',
  templateUrl: './devociones.page.html',
  styleUrls: ['./devociones.page.scss'],
})
export class DevocionesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  devociones =
  [
    {
      image: '../assets/images/devociones/devocional_1.jpg',
      text: 'Hacer discipulos, es el Gran Mandato de Jesús',
    },
    {
      image: '../assets/images/devociones/devocional_2.jpg',
      text: '¡Soy un discípulo! Una extención de amor',
    },
    {
      image: '../assets/images/devociones/devocional_3.jpg',
      text: 'Mantener el enfoque',
    },
    {
      image: '../assets/images/devociones/devocional_4.jpg',
      text: 'Jesús es el Hijo por excelencia y nuestro modelo a seguir',
    },
    {
      image: '../assets/images/devociones/devocional_5.jpg',
      text: 'El Discipulado se basa en imitación',
    },
    {
      image: '../assets/images/devociones/devocional_6.jpg',
      text: 'El Discípulo manifiesta el Reino',
    },
    {
      image: '../assets/images/devociones/devocional_7.jpg',
      text: 'El Discípulo forma el género',
    },
    {
      image: '../assets/images/devociones/devocional_8.jpg',
      text: 'El Discípulo se vuelve un modelo para otros',
    },
    {
      image: '../assets/images/devociones/devocional_9.jpg',
      text: 'El Discípulo necesita un grupo pequeño',
    },
    {
      image: '../assets/images/devociones/devocional_10.jpg',
      text: 'Los discípulos saben estar juntos y unánimes',
    },
    {
      image: '../assets/images/devociones/devocional_11.jpg',
      text: 'Hijos que vas a parir desde el corazón',
    },
  ];

}
