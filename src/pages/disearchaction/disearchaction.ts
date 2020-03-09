import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Member, MemberLst } from '../../models/Member';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DisearchactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disearchaction',
  templateUrl: 'disearchaction.html',
})
export class DisearchactionPage {

  public members: Member[];
  testRadioOpen: boolean;
  testRadioResult: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,private alertCtrl : AlertController) {
    this.getMembers(); 
  }
  getMembers() {
    this.members = MemberLst.sort((a, b) => (Number)(b._id) - (Number)(a._id));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisearchactionPage');
  }
  addaction(){
    var count = this.members.length + 1;
    const modal = this.modalCtrl.create("DiaddactionPage", { _id: "000" + count });
    modal.onDidDismiss(data => {
      if (data) {
        let member = data.value;
        this.members.unshift(member);
      }
    });
    modal.present(); 
  
  }

}
