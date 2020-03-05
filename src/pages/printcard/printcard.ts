import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Member, MemberLst } from '../../models/Member';

/**
 * Generated class for the PrintcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-printcard',
  templateUrl: 'printcard.html',
})
export class PrintcardPage {
  public members: Member[];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.getMembers(); 
  }
  presentModalCreatmembercard(member: Member) {
    const modal = this.modalCtrl.create("MembercardPage", {member: member });
    modal.onDidDismiss(data => {
      if (data) {
        let member = data.value;
        var index = this.members.findIndex(it => it._id == member._id);
        this.members[index] = member;
      }
    });
    modal.present();
  }
  getMembers() {
    this.members = MemberLst.sort((a, b) => (Number)(b._id) - (Number)(a._id));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrintcardPage');
  }

}
