import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectButtonService 
{
  botonActual: String = 'inicio';

  constructor() { }

  setBoton( boton: String )
  {
    this.botonActual = boton;
  }

  getBoton( )
  {
    return this.botonActual;
  }

}
