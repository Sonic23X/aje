import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TestimonioInfoPage } from '../testimonio-info/testimonio-info.page';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.page.html',
  styleUrls: ['./testimonios.page.scss'],
})
export class TestimoniosPage implements OnInit {

  constructor( private modalCtrl: ModalController, ) { }

  ngOnInit() {
  }

  testimonios =
  [
    {
      image: '../assets/images/testimonios/testimonio_1.jpg',
      title: 'Daniel Vega',
      number: 0,
    },
    {
      image: '../assets/images/testimonios/testimonio_2.jpg',
      title: 'Pastor Saúl Nava',
      number: 1,
    },
    {
      image: '../assets/images/testimonios/testimonio_3.jpg',
      title: 'Steffy de Acosta',
      number: 2,
    },
    {
      image: '../assets/images/testimonios/testimonio_4.jpg',
      title: 'Yarem Medina',
      number: 3,
    },
  ];

  async showInfo( number: Number )
  {
    const modal = await this.modalCtrl.create({
      component: TestimonioInfoPage,
      componentProps: {
        'option': number,
      },
    });
    return await modal.present();
  }

}
