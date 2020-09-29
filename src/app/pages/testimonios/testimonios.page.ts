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
      image: '../assets/images/testimonios/testimonio_1.jpg',
      title: 'Daniel Vega',
    },
    {
      image: '../assets/images/testimonios/testimonio_2.jpg',
      title: 'Pastor Saúl Nava',
    },
    {
      image: '../assets/images/testimonios/testimonio_3.jpg',
      title: 'Steffy de Acosta',
    },
    {
      image: '../assets/images/testimonios/testimonio_4.jpg',
      title: 'Yarem Medina',
    },
  ];

}
