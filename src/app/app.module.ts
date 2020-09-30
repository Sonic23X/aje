import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Toast,
    InAppBrowser,
    DocumentViewer,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
