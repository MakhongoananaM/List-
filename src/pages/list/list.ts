import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';

import { FormPage } from '../form/form';
import arrr from '../../app/Array';
import { xap } from '../../app/Data';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  
  xap=arrr

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  Enter(){

    this.navCtrl.push(FormPage);

     
  }
   Home(name,surname,id){
   
 
    
    let object=new xap(name,surname,id);
    if(object!=null){
      arrr.push(object);
      console.log(arrr);
      
    }}
  


  View(i){
    var name = this.xap[i].name;
    var surname = this.xap[i].surname;
    var id = this.xap[i].id;
    const prompt = this.alertCtrl.create({
      title: 'Empty List!',
      message: "Your list is empty. Please enter detalis by clicking the button on the bottom right.",
      inputs: [
       
        {
          name: 'name',
          placeholder: 'name',
          value:name
        },
        {
          name: 'surname',
          placeholder: 'surname',
          value:surname
        },
        {
          name: 'id',
          placeholder: 'id',
          value:id
        },
     
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: data => {
            arrr.splice(i,1);
            console.log('Delete clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {

            let obj = new xap(data.name,data.surname,data.id);
            this.xap.splice(i,1,obj);
            console.log('Update clicked');
          }
        }
      ]
    });
    prompt.present();
  }




  
      
  }  

 
  

