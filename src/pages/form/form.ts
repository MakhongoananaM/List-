import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ListPage } from '../list/list';
import arrr from '../../app/Array';
import { xap} from '../../app/Data';
/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public alartCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }
  ADD(name,surname,id){
    let object = new xap(name,surname,id)
    if (object!=null){
      arrr.push(object);
    }
  }


  View(){
    this.navCtrl.push(ListPage)
  }
  
}
