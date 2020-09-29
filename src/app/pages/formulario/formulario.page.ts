import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  pregunta1: string;
  pregunta2: string;
  pregunta3: string;
  pregunta4: string;
  pregunta5: string;
  pregunta6: string;
  pregunta7: string;
  pregunta8: string;
  pregunta9: string;
  pregunta10: string;
  pregunta11: string;
  pregunta12: string;
  pregunta13: string;
  pregunta14: string;

  constructor() { }

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
      console.log( 'El mayor es a' );
    
    if ( b > a && b > c && b > d )
      console.log( 'El mayor es b' );

    if ( c > a && c > b && c > d )
      console.log( 'El mayor es c' );

    if ( d > a && d > b && d > c )
      console.log( 'El mayor es d' );
      

  }
}
