import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  Start(){

    this.navCtrl.push(ListPage)

    const alert = this.alertCtrl.create({
      title: 'Empty List!',
      subTitle: 'Your list is empty. Please enter details!',
      buttons: ['OK']

    });
    alert.present();
  }
  }


