import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  pregunta1: string = '';
  pregunta2: string = '';
  pregunta3: string = '';
  pregunta4: string = '';
  pregunta5: string = '';
  pregunta6: string = '';
  pregunta7: string = '';
  pregunta8: string = '';
  pregunta9: string = '';
  pregunta10: string = '';
  pregunta11: string = '';
  pregunta12: string = '';
  pregunta13: string = '';
  pregunta14: string = '';

  constructor( 
    private navCtrl: NavController,
    private platform: Platform,
  ) 
  {
    this.platform.backButton.subscribeWithPriority( 10, ( ) => 
    {
      this.navCtrl.navigateRoot('/home');
    });
  }

  ngOnInit() {
  }

  radioGroupChange( event, number ) 
  {
    switch ( number )
    {
      case 1:
        this.pregunta1 = event.detail.value;
        break;
      case 2:
        this.pregunta2 = event.detail.value;
        break;
      case 3:
        this.pregunta3 = event.detail.value;
        break;
      case 4:
        this.pregunta4 = event.detail.value;
        break;
      case 5:
        this.pregunta5 = event.detail.value;
        break;
      case 6:
        this.pregunta6 = event.detail.value;
        break;
      case 7:
        this.pregunta7 = event.detail.value;
        break;
      case 8:
        this.pregunta8 = event.detail.value;
        break;
      case 9:
        this.pregunta9 = event.detail.value;
        break;
      case 10:
        this.pregunta10 = event.detail.value;
        break;
      case 11:
        this.pregunta11 = event.detail.value;
        break;
      case 12:
        this.pregunta12 = event.detail.value;
        break;
      case 13:
        this.pregunta13 = event.detail.value;
        break;
      case 14:
        this.pregunta14 = event.detail.value;
        break;
    }    
  }

  evaluar( )
  {

    if ( this.pregunta1 == '' || this.pregunta2 == '' || this.pregunta3 == '' || this.pregunta4 == '' || this.pregunta5 == '' ||
         this.pregunta6 == '' || this.pregunta7 == '' || this.pregunta8 == '' || this.pregunta9 == '' || this.pregunta10 == '' ||
         this.pregunta11 == '' || this.pregunta12 == '' || this.pregunta13 == '' || this.pregunta14 == '')
    {
      Swal.fire(
      {
        title: 'Error',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
      });

      return;
    }

    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;

    switch ( this.pregunta1 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    switch ( this.pregunta2 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    switch ( this.pregunta3 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    switch ( this.pregunta4 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    switch ( this.pregunta5 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }
    
    switch ( this.pregunta6 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    switch ( this.pregunta7 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    switch ( this.pregunta8 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    switch ( this.pregunta9 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    switch ( this.pregunta10 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    switch ( this.pregunta11 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    switch ( this.pregunta12 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    switch ( this.pregunta13 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    switch ( this.pregunta14 )
    {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }

    if ( a > b && a > c && a > d )
      Swal.fire(
      {
        title: 'Tu nivel es CONOCIDO',
        text: 'Has hecho un contacto inicial con la Iglesia, y te caracteriza el interés, aunque aún no desarrollas un compromiso más grande. <br>Te mueves principalmente en el sentido de la vista y para ti las impresiones son importantes. Estás en la etapa de desarrollar empatía. <br>Te recomendamos que te bautices pronto si aún no lo haces y que busques rápidamente a alguien que te acompañe en tu crecimiento y pronto te bautices.'
      });
    
    if ( b > a && b > c && b > d )
      Swal.fire({
        title: 'Tu nivel es SIERVO',
        text: 'Ya has puesto tu fe en Cristo, te bautizaste y te uniste a una Iglesia local. Estás echando raíces y quizá sirves como voluntario en algún ministerio.<br> Estás desarrollando la mentalidad correcta y subiendo tu nivel de compromiso.<br> Te mueves principalmente por lo que escuchas y por lo que tu meta es seguir instrucciones para tu crecimiento.<br>Te recomendamos que sigas de cerca a un hermano mayor, y resistas la presión de críticas, burlas y problemas que te puedan hacer frente. Debes afirmar tu comunión con Dios de manera disciplinada con la lectura de la Biblia y la oración. Desarrolla obediencia',
      });

    if ( c > a && c > b && c > d )
      Swal.fire({
        title: 'Tu nivel es AMIGO',
        text: 'Te has vuelto confiable en la Iglesia a la que perteneces.<br> Has desarrollado por tiempo una actitud de servicio fiel y has crecido en madurez, aunque aún estás en el proceso de dar el fruto completo y correcto en el Reino.<br>Te recomendamos que aprendas el valor de amar y honrar a tus pastores y líderes y abraces la revelación de tu iglesia.<br> Tu palabra clave es intimidad para desarrollar fidelidad.',
      });

    if ( d > a && d > b && d > c )
      Swal.fire({
        title: 'Tu nivel es HIJO',
        text: 'Eres un discípulo que ha desarrollado completa su identidad.<br> Estás aprendiendo a operar como rey y sacerdote, fuera de las cuatro paredes de tu iglesia y te preparas para guiar el avance del Reino con los énfasis propios de la casa que te formó.<br> Te has vuelto un hacedor, así que la meta es que ocupes la posición a la que Dios te llamó.<br>Te recomendamos mantener tu lealtad a tu iglesia, prepararte en cómo expresar tu ministerio en el ámbito social, fuera del templo, y te mantengas en la llenura del espíritu para funcionar bien en tu asignación',
      });
    
      this.navCtrl.navigateRoot('/home');
  }
}
