import { Component } from '@angular/core';
import { NavController, NavParams, DateTime, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { EmployeePage } from '../employee/employee';
import { Title } from '@angular/platform-browser';
import { ListPage } from '../list/list';
import { Member, MemberLst } from '../../models/Member';

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

  public members: Member[];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
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


  presentModalAddMember() {
    var count = this.members.length + 1;
    const modal = this.modalCtrl.create("AddmemberPage", { _id: "000" + count });
    modal.onDidDismiss(data => {
      if (data) {
        let member = data.value;
        this.members.unshift(member);
      }
    });
    modal.present();
  }

  presentModalEditMember(member: Member) {
    const modal = this.modalCtrl.create("DlgEditMemberPage", { member: member });
    modal.onDidDismiss(data => {
      if (data) {
        let member = data.value;
        var index = this.members.findIndex(it => it._id == member._id);
        this.members[index] = member;
      }
    });
    modal.present();
  }

  presentModalCreatmembercard(member: Member) {
    const modal = this.modalCtrl.create("MembercardPage", { member: member });
    modal.onDidDismiss(data => {
      if (data) {
        let member = data.value;
        var index = this.members.findIndex(it => it._id == member._id);
        this.members[index] = member;
      }
    });
    modal.present();
  }
  presentModalFingerprint(member: Member) {
    const modal = this.modalCtrl.create("DifingerprintPage", { member: member });
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

