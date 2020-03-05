import { Component } from '@angular/core';
import { NavController, NavParams, DateTime } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { EmployeePage } from '../employee/employee';
import { Title } from '@angular/platform-browser';
import { ListPage } from '../list/list';

/**
 * Generated class for the FinancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-finance',
  templateUrl: 'finance.html',
})
export class FinancePage {
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
  }

