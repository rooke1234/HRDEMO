import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AddmemberPage } from '../addmember/addmember';
import { Member } from '../../models/Member';

/**
 * Generated class for the PersoninfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personinfo',
  templateUrl: 'personinfo.html',
})
export class PersoninfoPage {
  public FormItem: FormGroup;
  private submitRequested: boolean

  public members: Member[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public fb: FormBuilder,private viewCtrl: ViewController,public modalCtrl: ModalController) {
    this.FormItem = this.fb.group({
      '_id': [null],
      'idNumber': [null, [Validators.compose([Validators.pattern('[0-9]*')]), Validators.minLength(13), Validators.maxLength(13), Validators.required]],
      'tHName': [null, Validators.required],
      'department': [null, Validators.required],
      'function': [null],
      'dateOfBirth': [null],
      'address': [null],
      'salary': [null],
      'gen_salary': [null],
      'working_hours': [null],
      'social_security': [null],
      'trial': [null],
      'education': [null],
      'dateOfExpiry': [null],
      'picture': ['../../assets/imgs/id.jpg'],
      'phoneNumber': [null, [Validators.compose([Validators.pattern('[0-9]*')]), Validators.minLength(10), Validators.maxLength(10), Validators.required]],
    });
    let _id = navParams.get('_id');
    this.FormItem.get('_id').setValue(_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersoninfoPage');
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == "idNumber") {
      let ctrls = this.FormItem.get('idNumber');
      return (ctrls.errors && (ctrls.errors.maxlength || ctrls.errors.minlength || ctrls.errors.pattern)) && (ctrls.dirty || this.submitRequested);
    }
    if (name == "phoneNumber") {
      let ctrls = this.FormItem.get('phoneNumber');
      return (ctrls.errors && (ctrls.errors.maxlength || ctrls.errors.minlength || ctrls.errors.pattern)) && (ctrls.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
  presentModalAddMember() {
    this.navCtrl.push(AddmemberPage);
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
}
