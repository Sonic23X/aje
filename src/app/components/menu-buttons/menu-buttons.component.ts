import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input  } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SelectButtonService } from '../../services/select-button.service';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.scss'],
})
export class MenuButtonsComponent implements OnInit, AfterViewInit {

  @ViewChild( 'start' ) buttonInicio: ElementRef;
  @ViewChild( 'devocion' ) buttonDevocion: ElementRef;
  @ViewChild( 'contenido' ) buttonContenido: ElementRef;
  @ViewChild( 'testimonios' ) buttonTestimonio: ElementRef;

  actualView: String = '';

  constructor( private navCtrl: NavController, private selectButton: SelectButtonService, ) 
  { }

  ngOnInit() {}

  ngAfterViewInit( )
  {
    this.actualView = this.selectButton.getBoton( );

    let inicio: HTMLDivElement = this.buttonInicio.nativeElement;
    let devocion: HTMLDivElement = this.buttonDevocion.nativeElement;
    let contenido: HTMLDivElement = this.buttonContenido.nativeElement;
    let testimonio: HTMLDivElement = this.buttonTestimonio.nativeElement;

    switch ( this.actualView )
    {
      case 'inicio':
        inicio.classList.remove( 'btn-aje' );
        inicio.classList.add( 'btn-aje-selected' );
        break;
      case 'devocion':
        devocion.classList.remove( 'btn-aje' );
        devocion.classList.add( 'btn-aje-selected' );
        break;
      case 'contenido':
        contenido.classList.remove( 'btn-aje' );
        contenido.classList.add( 'btn-aje-selected' );
        break;
      case 'testimonios':
        testimonio.classList.remove( 'btn-aje' );
        testimonio.classList.add( 'btn-aje-selected' );
        break;
    }
        
  }

  startClick( )
  {
    if ( this.actualView != 'inicio' )
    {
      this.selectButton.setBoton( 'inicio' );
      this.navCtrl.navigateRoot('/home');
    }
  }
  
  devClick( )
  {
    if ( this.actualView != 'devocion' )
    {
      this.selectButton.setBoton( 'devocion' );
      this.navCtrl.navigateRoot('/devociones');
    }
  }

  contClick( )
  {
    if ( this.actualView != 'contenido' )
    {
      this.selectButton.setBoton( 'contenido' );
      this.navCtrl.navigateRoot('/contenidos');
    }
  }

  testClick( )
  {
    if ( this.actualView != 'testimonios' )
    {
      this.selectButton.setBoton( 'testimonios' );
      this.navCtrl.navigateRoot('/testimonios');
    }
  }

}
