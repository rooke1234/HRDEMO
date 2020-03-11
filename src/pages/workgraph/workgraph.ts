import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PersoninfoPage } from '../personinfo/personinfo';
import { ActionPage } from '../action/action';
import { HomePage } from '../home/home';

/**
 * Generated class for the WorkgraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workgraph',
  templateUrl: 'workgraph.html',
})
export class WorkgraphPage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkgraphPage');
  }
  PresentPersonInfoPage(){
    this.navCtrl.push(PersoninfoPage);
  }
  presentActionPage(){
    this.navCtrl.push(ActionPage);
  }
  

}
