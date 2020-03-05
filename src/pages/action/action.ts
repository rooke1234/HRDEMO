import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Button } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ActionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action',
  templateUrl: 'action.html',
})
export class ActionPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl : AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'ตารางเวลา ' + i,
        note: 'ช่วงเวลา' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionPage');
  }

  Addtime() {
    let alert = this.alertCtrl.create({
      title: 'เพิ่มพฤติกรรม',
      inputs: [
        {
          name: 'ชื่อ',
          placeholder: 'ชื่อ'
        },
        { 
          name: 'แผนก',
          placeholder: 'แผนก'
        },
        
      ],
  
      buttons: [
        {
          text: 'เพิ่ม',
          role: 'เพิ่ม',
          handler: data => {
            console.log('Add clicked');
            
          }
        
        },
        {
          text: 'Cancel',
          role: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
            
          }
        
        },
        
      ]
      });
    alert.present();
  }

}
