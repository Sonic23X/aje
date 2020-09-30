import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor( 
    public userService: UserService, 
    private platform: Platform,
    private navCtrl: NavController,
  ) 
  { 
    this.platform.backButton.subscribeWithPriority( 10, ( ) => 
    {
      this.navCtrl.navigateRoot('/home');
    });
  }

  ngOnInit() {
  }

}
