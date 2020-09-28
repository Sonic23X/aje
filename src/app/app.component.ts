import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'mail'
    },
    {
      title: 'Test',
      url: '/test',
      icon: 'paper-plane'
    },
    {
      title: 'Escanear QR',
      url: '/qr',
      icon: 'heart'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'warning'
    },
    {
      title: 'Salir',
      url: '/exit',
      icon: 'warning'
    },
  ];

  temporaly =
  [
    {
      title: 'Devocionales',
      url: '/devocion',
      icon: 'trash'
    },
    {
      title: 'Contenido',
      url: '/contenido',
      icon: 'warning'
    },
    {
      title: 'Testimonios',
      url: '/testimonio',
      icon: 'warning'
    },
    {
      title: 'material',
      url: '/contenido',
      icon: 'archive'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() { }
}
