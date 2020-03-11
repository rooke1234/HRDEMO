import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Member } from '../../models/Member';
import { HomePage } from '../home/home';
import { PersonsearchPage } from '../personsearch/personsearch';
import { MembercardPage } from '../membercard/membercard';
import { PersoninfoPageModule } from '../personinfo/personinfo.module';

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
  reason :any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    // this.Addaction();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddactionPage');
  }




  presentModal() {
    const modal = this.modalCtrl.create(PersonsearchPage);
    modal.present();
  }

}
