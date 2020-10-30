import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  picture: String = '';
  name: String = '';
  email: String = '';
  phone: String = '';
  uid: String = '';
  isScanned: Boolean = false;

  constructor( private storage: Storage, private navCtrl: NavController ) { this.loadUser( ); console.log( this.storage.get( 'name' ) ); }

  setUser( nombre: String, correo: String, uid: String, cel: String, foto: String )
  {
    this.picture = foto;
    this.name = nombre;
    this.email = correo;
    this.phone = cel;
    this.uid = uid;

    //guardamos en el storage
    this.storage.set( 'name', nombre );
    this.storage.set( 'email', correo );
    this.storage.set( 'phone', cel );
    this.storage.set( 'picture', foto );
    this.storage.set( 'uid', uid );
  }

  setScan( scan: Boolean )
  {
    this.isScanned = scan;
    this.storage.set( 'scanner', scan );
  }

  getUser( )
  {
    return { foto: this.picture, nombre: this.name, correo: this.email, telefono: this.phone };
  }

  getScan( )
  {
    return this.isScanned;
  }

  async loadUser( )
  {
    const nombre = await this.storage.get( 'name' );
    const correo = await this.storage.get( 'email' );
    const cel = await this.storage.get( 'phone' );
    const foto = await this.storage.get( 'picture' );
    const uid = await this.storage.get( 'uid' );
    const scanner = await this.storage.get( 'scanner' );        

    if ( foto )
      this.picture = foto;
    if ( nombre )
      this.name = nombre;
    if ( correo )
      this.email = correo;
    if ( cel )
      this.phone = cel;
    if ( uid )
      this.uid = uid;
    if ( scanner )
      this.isScanned = scanner;
  }

  

  validateToken(): Promise<boolean>
  {
    return new Promise( resolve =>
    {
      this.storage.get( 'uid' ).then( value => 
      {                
        if ( value != '' && value != null )
        {
          resolve( true );
        }
        else
        {
          this.navCtrl.navigateRoot('/login');
          resolve( false );
        }
      });
    });
  }

  validateQR( ): Promise<boolean>
  {
    return new Promise( resolve => 
    {
      this.storage.get( 'scanner' ).then( value => 
      { 
        if ( value == true && value != null )
        {
          resolve( true );
        }
        else
        {
          this.navCtrl.navigateRoot('/qr');
          resolve( false );
        }    
      });
    });
  }

}
