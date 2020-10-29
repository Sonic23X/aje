import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( 
    private afAuth: AngularFireAuth, 
    private platform: Platform, 
    private googlePlus: GooglePlus,
    private userService: UserService,
    private route: Router,
    private storage: Storage,
    private navCtrl: NavController,
  ) 
  { 
    this.platform.backButton.subscribeWithPriority( 10, () => 
    {
      navigator['app'].exitApp();
    });   
    
    this.storage.get( 'name' ).then( value =>
    {      
      if ( value != null )
      {
        this.route.navigateByUrl( '/home' );
      }

    });
  }

  ngOnInit() 
  { 
    
  }

  loginGoogle() 
  {
    if ( this.platform.is( 'android' ) )
    {
      this.loginAndroid( );
    }
    else if ( this.platform.is( 'ios' ) )
    {
      this.loginIOS( );
    }
    else
    {
      this.loginWeb( );
    }
  }

  async loginAndroid ( )
  {
    const res = await this.googlePlus.login(
    {
      'webClientId': '168208378923-81n8arpvm0u1fhkmklh6qm7mbcqmf5ns.apps.googleusercontent.com',
      'offline': true
    });
    const resConfirmed = await this.afAuth.signInWithCredential( firebase.auth.GoogleAuthProvider.credential( res.idToken ) );
    const user = resConfirmed.user;
    this.userService.setUser( user.displayName, user.email, user.uid, user.phoneNumber, user.photoURL );
    this.navCtrl.navigateRoot('/home');
  }

  loginIOS( )
  {

  }

  async loginWeb( )
  {
    const res = await this.afAuth.signInWithPopup( new firebase.auth.GoogleAuthProvider( ) );
    const user = res.user;
    this.userService.setUser( user.displayName, user.email, user.uid, user.phoneNumber, user.photoURL );
    this.navCtrl.navigateRoot('/home');
  }

}
