import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.scss'],
})
export class MenuButtonsComponent implements OnInit {

  @ViewChild( 'start' ) buttonInicio: ElementRef;
  @ViewChild( 'devocion' ) buttonDevocion: ElementRef;
  @ViewChild( 'contenido' ) buttonContenido: ElementRef;
  @ViewChild( 'testimonios' ) buttonTestimonio: ElementRef;

  actualView = 'inicio';

  constructor() { }

  ngOnInit() {}

  startClick( )
  {
    if ( this.actualView != 'inicio' )
    {
      let inicio: HTMLDivElement = this.buttonInicio.nativeElement;
      let devocion: HTMLDivElement = this.buttonDevocion.nativeElement;
      let contenido: HTMLDivElement = this.buttonContenido.nativeElement;
      let testimonio: HTMLDivElement = this.buttonTestimonio.nativeElement;

      switch ( this.actualView )
      {
        case 'devocion':
          devocion.classList.remove( 'btn-aje-selected' );
          devocion.classList.add( 'btn-aje' );
          break;
        case 'contenido':
          contenido.classList.remove( 'btn-aje-selected' );
          contenido.classList.add( 'btn-aje' );
          break;
        case 'testimonio':
          testimonio.classList.remove( 'btn-aje-selected' );
          testimonio.classList.add( 'btn-aje' );
          break;
      }
      
      inicio.classList.remove( 'btn-aje' );
      inicio.classList.add( 'btn-aje-selected' );

      this.actualView = 'inicio';
    }
  }
  
  devClick( )
  {
    if ( this.actualView != 'devocion' )
    {
      let inicio: HTMLDivElement = this.buttonInicio.nativeElement;
      let devocion: HTMLDivElement = this.buttonDevocion.nativeElement;
      let contenido: HTMLDivElement = this.buttonContenido.nativeElement;
      let testimonio: HTMLDivElement = this.buttonTestimonio.nativeElement;

      switch ( this.actualView )
      {
        case 'inicio':
          inicio.classList.remove( 'btn-aje-selected' );
          inicio.classList.add( 'btn-aje' );
          break;
        case 'contenido':
          contenido.classList.remove( 'btn-aje-selected' );
          contenido.classList.add( 'btn-aje' );
          break;
        case 'testimonio':
          testimonio.classList.remove( 'btn-aje-selected' );
          testimonio.classList.add( 'btn-aje' );
          break;
      }
      
      devocion.classList.remove( 'btn-aje' );
      devocion.classList.add( 'btn-aje-selected' );

      this.actualView = 'devocion';
    }
  }

  contClick( )
  {
    if ( this.actualView != 'contenido' )
    {
      let inicio: HTMLDivElement = this.buttonInicio.nativeElement;
      let devocion: HTMLDivElement = this.buttonDevocion.nativeElement;
      let contenido: HTMLDivElement = this.buttonContenido.nativeElement;
      let testimonio: HTMLDivElement = this.buttonTestimonio.nativeElement;

      switch ( this.actualView )
      {
        case 'inicio':
          inicio.classList.remove( 'btn-aje-selected' );
          inicio.classList.add( 'btn-aje' );
          break;
        case 'devocion':
          devocion.classList.remove( 'btn-aje-selected' );
          devocion.classList.add( 'btn-aje' );
          break;
        case 'testimonio':
          testimonio.classList.remove( 'btn-aje-selected' );
          testimonio.classList.add( 'btn-aje' );
          break;
      }
      
      contenido.classList.remove( 'btn-aje' );
      contenido.classList.add( 'btn-aje-selected' );

      this.actualView = 'contenido';
    }
  }

  testClick( )
  {
    if ( this.actualView != 'testimonio' )
    {
      let inicio: HTMLDivElement = this.buttonInicio.nativeElement;
      let devocion: HTMLDivElement = this.buttonDevocion.nativeElement;
      let contenido: HTMLDivElement = this.buttonContenido.nativeElement;
      let testimonio: HTMLDivElement = this.buttonTestimonio.nativeElement;

      switch ( this.actualView )
      {
        case 'inicio':
          inicio.classList.remove( 'btn-aje-selected' );
          inicio.classList.add( 'btn-aje' );
          break;
        case 'devocion':
          devocion.classList.remove( 'btn-aje-selected' );
          devocion.classList.add( 'btn-aje' );
          break;
        case 'contenido':
          contenido.classList.remove( 'btn-aje-selected' );
          contenido.classList.add( 'btn-aje' );
          break;
      }
      
      testimonio.classList.remove( 'btn-aje' );
      testimonio.classList.add( 'btn-aje-selected' );

      this.actualView = 'testimonio';
    }
  }

}
