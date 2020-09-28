import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  showButton = true;

  constructor( 
    private barcodeScanner: BarcodeScanner,
    private toast: Toast,
    ) { }

  ngOnInit() { }

  startScan( )
  {
    this.barcodeScanner.scan( { prompt : "Coloca el QR en el centro de la cámara", resultDisplayDuration: 0, } ).then( barcodeData => 
    {
      if( barcodeData.text == 'AEJ20200001' )
      {
        this.toast.show( `QR Válido`, '5000', 'bottom' ).subscribe( toast => { } );
        this.showButton = false;
      }
      else
        this.toast.show( `QR no válido`, '5000', 'bottom' ).subscribe( toast => { } );
    }).catch(err => 
    {
      this.toast.show( `Error al abrir la cámara`, '5000', 'bottom' ).subscribe( toast => { } );
    });
  }

}
