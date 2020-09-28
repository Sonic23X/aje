import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.page.html',
  styleUrls: ['./testimonios.page.scss'],
})
export class TestimoniosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testimonios =
  [
    {
      image: '../assets/images/home/cards/dia1.jpg',
      title: 'Testimonio 1',
      text: 'Testimonio de Daniel Vega',
    },
    {
      image: '../assets/images/home/cards/dia3.jpg',
      title: 'Testimonio 2',
      text: 'Testimonio de Saúl Nava Bravo',
    },
    {
      image: '../assets/images/home/cards/dia6.jpg',
      title: 'Testimonio 3',
      text: 'Testimonio de Steffy de Acosta',
    },
    {
      image: '../assets/images/home/cards/dia7.jpg',
      title: 'Testimonio 4',
      text: 'Testimonio de Yarem Medina',
    },
  ];

}
