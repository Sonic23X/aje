import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { UserService } from './services/user.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit 
{

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private iab: InAppBrowser,
    public userService: UserService,
  ) 
  {
    this.initializeApp( );
  }

  initializeApp() 
  {
    this.platform.ready().then(() => 
    {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    
  }

  ngOnInit() { }

  viewDocument() 
  {
    
    this.iab.create( 'http://aej.cludevs.com.mx/manual.pdf', '_system' );
    
  }

  viewForm()
  {
    this.iab.create( 'http://bit.ly/3gUDV34', '_system' );
  }

  exit( )
  {
    navigator['app'].exitApp();
  }
}
