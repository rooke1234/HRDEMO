import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PersonsearchPage } from '../personsearch/personsearch';

/**
 * Generated class for the AddfinancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addfinance',
  templateUrl: 'addfinance.html',
})
export class AddfinancePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddfinancePage');
  }

  presentModal() {
    const modal = this.modalCtrl.create(PersonsearchPage);
    modal.present();
  }

}
