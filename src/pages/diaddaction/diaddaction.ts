import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Member, MemberLst } from '../../models/Member';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the DiaddactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diaddaction',
  templateUrl: 'diaddaction.html',
})
export class DiaddactionPage {

  public members: Member[];
  testRadioOpen: boolean;
  testRadioResult: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,private alertCtrl : AlertController) {
    this.getMembers(); 
  }
  getMembers() {
    this.members = MemberLst.sort((a, b) => (Number)(b._id) - (Number)(a._id));
  }

  searching(ev: any) {
    this.getMembers();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.members = this.members.filter((item) => {
        return this.haveAnyWord(item.tHName, val) ||
          this.haveAnyWord(item.department, val) ||
          this.haveAnyWord(item.phoneNumber, val);
      })
    }
  }

  haveAnyWord(item: any, word: any): boolean {
    return item.toLowerCase().indexOf(word.toLowerCase()) > -1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiaddactionPage');
  }
  addactiondetail() {
    
      let alert = this.alertCtrl.create();
      alert.setTitle('เลือกพฤติกรรม');
  
      alert.addInput({
        type: 'radio',
        label: 'ลา',
        value: 'leave',
        checked: true
        
      });

      alert.addInput({
        type: 'radio',
        label: 'สาย',
        value: 'late',
        checked: false
      });

      alert.addInput({
        type: 'radio',
        label: 'ขาด',
        value: 'takeoff',
        checked: false
      });

      alert.addInput({
        type: 'radio',
        label: 'เปลี่ยนแปลงเวลา',
        value: 'change',
        checked: false
      });

      alert.addInput({
        type: 'radio',
        label: 'OT',
        value: 'OT',
        checked: false
      });

      alert.addInput({
        type: 'radio',
        label: 'เล่นโทรศัพท์',
        value: 'phone',
        checked: false
      });

      alert.addInput({
        type: 'radio',
        label: 'ดื่มสุรา',
        value: 'drink',
        checked: false
      });

      alert.addInput({
        type: 'radio',
        label: 'นอนหลับ',
        value: 'sleep',
        checked: false
      });

      
  
      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: data => {
          this.testRadioOpen = false;
          this.testRadioResult = data;
          
        }
        
      });
      alert.present();
    }
  
  

}
