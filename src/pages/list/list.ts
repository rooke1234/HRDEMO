import { Component } from '@angular/core';
import { NavController, NavParams, DateTime } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { EmployeePage } from '../employee/employee';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
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

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  scwork(){
    this.selectedItem.push(DateTime)
  };
  Addtime() {
    let alert = this.alertCtrl.create({
      title: 'เพิ่มตารางงาน',
      inputs: [
        {
          name: 'time',
          placeholder: 'ชื่อตารางเวลา'
        },
        { 
          label: 'ถึงเวลา',
          name: 'firsttime',
          placeholder: 'time',
          type: 'time'
        },
        {
          label: 'ถึงเวลา',
          name: 'endtime',
          placeholder: 'time',
          type: 'time'
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

  Addaction(){
    
  }
}

