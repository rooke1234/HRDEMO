import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Member, MemberLst } from '../../models/Member';

/**
 * Generated class for the SalaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salary',
  templateUrl: 'salary.html',
})
export class SalaryPage {

  public members: Member[];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.getMembers(); 
  }
  getMembers() {
    this.members = MemberLst.sort((a, b) => (Number)(b._id) - (Number)(a._id));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaryPage');
  }

}
