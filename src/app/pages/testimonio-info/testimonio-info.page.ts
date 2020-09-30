import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-testimonio-info',
  templateUrl: './testimonio-info.page.html',
  styleUrls: ['./testimonio-info.page.scss'],
})
export class TestimonioInfoPage implements OnInit {

  @Input( ) option: Number;

  testimonios =
  [
    {
      image: '../assets/images/testimonios/testimonio_1.jpg',
      title: 'Daniel Vega',
      text: '<p class="text-justify">       Al estilo de Jesús es más que un simple manual para crecer personalmente, para Daniel ha sido de mucha más que eso para su vida personal sino socialmente y para su vida espiritual. Gracias a este modelo le ha permitido ser instruido y corregido correctamente para cumplir con su principal y propósito en la tierra.     </p>',
      video: 'http://aje.cludevs.com.mx/resources/videos/Testimonial01.mp4',
    },
    {
      image: '../assets/images/testimonios/testimonio_2.jpg',
      title: 'Pastor Saúl Nava',
      text: '<p class="text-justify">       Al Estilo de Jesús es un gran modelo para las nuevas iglesias es por eso que el pastor Saúl nos comparte su experiencia, la cual le ha sido de mucha bendición para cumplir con los principios fundamentales para discipular a sus hijos en Cristo, para ser bendecido como hijo y como padre espiritual para ser transformados y ser el verdadero reflejo de la paternidad de Jesús.     </p>',
      video: 'http://aje.cludevs.com.mx/resources/videos/Testimonial02.mp4',
    },
    {
      image: '../assets/images/testimonios/testimonio_3.jpg',
      title: 'Steffy de Acosta',
      text: '<p class="text-justify">       Para Steffiy y como para muchos puede cambiarte tu vida, principalmente te ayudará a conocerte a conocer a Dios y a darlo a conocer con el verdadero amor que Dios tiene para nosotros y eso nos permitirá alcanzar nuevos niveles para amar a Dios y para poder amar a los que nos rodean.     </p>',
      video: 'http://aje.cludevs.com.mx/resources/videos/Testimonial03.mp4',
    },
    {
      image: '../assets/images/testimonios/testimonio_4.jpg',
      title: 'Yarem Medina',
      text: '<p class="text-justify">       Para Yarem podemos ver que es más allá que un modelo de discipulado es una forma increíble de compartir el corazón a las personas, como Jesús mismo lo hizo. Siendo una gran guía para ejercer un verdadero liderazgo como una paternidad original como Jesús mismo lo enseñó, con todo el amor entregando la misma vida por otros.     </p>',
      video: 'http://aje.cludevs.com.mx/resources/videos/Testimonial04.mp4',
    },
  ];

  constructor( 
    private modalCtrl: ModalController, 
    private iab: InAppBrowser,
    private platform: Platform, ) 
    { 
      this.platform.backButton.subscribeWithPriority( 10, ( ) => 
      {
        this.dismiss( );
      });
    }

  ngOnInit() {
  }

  dismiss() 
  {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  viewVideo( id: any )
  {
    this.iab.create( this.testimonios[ id ].video, '_system' );
  }

}
