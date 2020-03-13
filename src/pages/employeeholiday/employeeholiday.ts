import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { text } from '@angular/core/src/render3/instructions';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

/**
 * Generated class for the EmployeeholidayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employeeholiday',
  templateUrl: 'employeeholiday.html',
})
export class EmployeeholidayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeholidayPage');
  }
  dateSelected()  {
    const confirm = this.alertCtrl.create({
      title: 'วันหยุดประจำสัปดาห์ของพนักงาน',
      message: 'เพิ่มหรือลบวันหยุดของพนักงาน',
      buttons: [
        {
          text: 'ลบ',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'เพิ่ม',
          handler: () => {
            console.log('Agree clicked');
            
            
          }
        }
      ]
    });
    confirm.present();
  }

}
