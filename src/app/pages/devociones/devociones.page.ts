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
      image: '../assets/images/home/cards/dia1.jpg',
      text: 'Hacer discipulos, es el Gran Mandato de Jesús',
    },
    {
      image: '../assets/images/home/cards/dia3.jpg',
      text: '¡Soy un discípulo! Una extención de amor',
    },
    {
      image: '../assets/images/home/cards/dia6.jpg',
      text: 'Mantener el enfoque',
    },
    {
      image: '../assets/images/home/cards/dia7.jpg',
      text: 'Jesús es el hijo por excelencia',
    },
  ];

}
