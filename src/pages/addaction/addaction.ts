import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Member } from '../../models/Member';

/**
 * Generated class for the AddactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addaction',
  templateUrl: 'addaction.html',
})
export class AddactionPage {
  public members: Member[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    // this.Addaction();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddactionPage');
  }

  Addaction() {
    var count = this.members.length + 1;
    const modal = this.modalCtrl.create("DisearchactionPage", { _id: "000" + count });
    modal.onDidDismiss(data => {
      if (data) {
        let member = data.value;
        this.members.unshift(member);
      }
    });
    modal.present(); 
  }

}
