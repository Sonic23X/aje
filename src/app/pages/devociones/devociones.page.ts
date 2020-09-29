import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DevocionInfoPage } from '../devocion-info/devocion-info.page';

@Component({
  selector: 'app-devociones',
  templateUrl: './devociones.page.html',
  styleUrls: ['./devociones.page.scss'],
})
export class DevocionesPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  devociones =
  [
    {
      image: '../assets/images/devociones/devocional_1.jpg',
      text: 'Hacer discipulos, es el Gran Mandato de Jesús',
      number: 0,
    },
    {
      image: '../assets/images/devociones/devocional_2.jpg',
      text: '¡Soy un discípulo! Una extención de amor',
      number: 1,
    },
    {
      image: '../assets/images/devociones/devocional_3.jpg',
      text: 'Mantener el enfoque',
      number: 2,
    },
    {
      image: '../assets/images/devociones/devocional_4.jpg',
      text: 'Jesús es el Hijo por excelencia y nuestro modelo a seguir',
      number: 3,
    },
    {
      image: '../assets/images/devociones/devocional_5.jpg',
      text: 'El Discipulado se basa en imitación',
      number: 4,
    },
    {
      image: '../assets/images/devociones/devocional_6.jpg',
      text: 'El Discípulo manifiesta el Reino',
      number: 5,
    },
    {
      image: '../assets/images/devociones/devocional_7.jpg',
      text: 'El Discípulo forma el género',
      number: 6,
    },
    {
      image: '../assets/images/devociones/devocional_8.jpg',
      text: 'El Discípulo se vuelve un modelo para otros',
      number: 7,
    },
    {
      image: '../assets/images/devociones/devocional_9.jpg',
      text: 'El Discípulo necesita un grupo pequeño',
      number: 8,
    },
    {
      image: '../assets/images/devociones/devocional_10.jpg',
      text: 'Los discípulos saben estar juntos y unánimes',
      number: 9,
    },
    {
      image: '../assets/images/devociones/devocional_11.jpg',
      text: 'Hijos que vas a parir desde el corazón',
      number: 10,
    },
  ];

  async showInfo( number: Number )
  {
    const modal = await this.modalCtrl.create({
      component: DevocionInfoPage,
      componentProps: {
        'option': number,
      },
    });
    return await modal.present();
  }

}
