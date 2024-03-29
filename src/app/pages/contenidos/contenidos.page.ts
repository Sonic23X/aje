import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContenidoInfoPage } from '../contenido-info/contenido-info.page';

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
      title: '¿QUÉ ES?',
      number: 0,
    },
    {
      image: '../assets/images/contenido/contenido_2.jpg',
      title: 'PRINCIPIOS CLAVE',
      number: 1,
    },
  ];

   //configuración del slider de imagenes
   slideOpts =
   {
     pagination: false,
     on:
     {
       beforeInit()
       {
         const swiper = this;
         swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
         const overwriteParams =
         {
           slidesPerView: 1,
           slidesPerColumn: 1,
           slidesPerGroup: 1,
           watchSlidesProgress: true,
           spaceBetween: 0,
           virtualTranslate: true,
         };
         swiper.params = Object.assign(swiper.params, overwriteParams);
         swiper.params = Object.assign(swiper.originalParams, overwriteParams);
       },
       setTranslate()
       {
         const swiper = this;
         const { slides } = swiper;
         for (let i = 0; i < slides.length; i += 1)
         {
           const $slideEl = swiper.slides.eq(i);
           const offset$$1 = $slideEl[0].swiperSlideOffset;
             let tx = -offset$$1;
           if (!swiper.params.virtualTranslate) tx -= swiper.translate;
             let ty = 0;
           if (!swiper.isHorizontal())
           {
             ty = tx;
             tx = 0;
           }
           const slideOpacity = swiper.params.fadeEffect.crossFade
             ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
             : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
           $slideEl
             .css({
               opacity: slideOpacity,
             })
             .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
         }
       },
       setTransition(duration)
       {
         const swiper = this;
         const { slides, $wrapperEl } = swiper;
         slides.transition(duration);
         if (swiper.params.virtualTranslate && duration !== 0)
         {
           let eventTriggered = false;
           slides.transitionEnd(() =>
           {
             if (eventTriggered) return;
             if (!swiper || swiper.destroyed) return;
             eventTriggered = true;
             swiper.animating = false;
             const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
             for (let i = 0; i < triggerEvents.length; i += 1) {
               $wrapperEl.trigger(triggerEvents[i]);
             }
           });
         }
       },
     }
   };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async showInfo( number: Number )
  {
    const modal = await this.modalCtrl.create({
      component: ContenidoInfoPage,
      componentProps: {
        'option': number,
      },
    });
    return await modal.present();
  }

}
