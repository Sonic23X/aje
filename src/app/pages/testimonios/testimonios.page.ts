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
      image: '../assets/images/testimonios/testimonio_1.png',
      title: 'Testimonio 1',
    },
    {
      image: '../assets/images/testimonios/testimonio_2.png',
      title: 'Testimonio 2',
    },
    {
      image: '../assets/images/testimonios/testimonio_3.png',
      title: 'Testimonio 3',
    },
    {
      image: '../assets/images/testimonios/testimonio_4.png',
      title: 'Testimonio 4',
    },
  ];

}
