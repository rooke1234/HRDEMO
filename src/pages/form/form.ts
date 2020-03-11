import { Component } from '@angular/core';
import { NavController, NavParams, DateTime, ModalController } from 'ionic-angular';
import { Member, MemberLst } from '../../models/Member';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  public members: Member[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.getMembers();
  }

  getMembers() {
    this.members = MemberLst.sort((a, b) => (Number)(b._id) - (Number)(a._id));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  PresentAddfrom(member: Member){
    const modal = this.modalCtrl.create("AddformPage", { member: member });
    modal.onDidDismiss(data => {
      if (data) {
        let member = data.value;
        var index = this.members.findIndex(it => it._id == member._id);
        this.members[index] = member;
      }
    });
    modal.present();
  }

}
