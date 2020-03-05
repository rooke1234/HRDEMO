import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Member, MemberLst } from '../../models/Member';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the AddmemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addmember',
  templateUrl: 'addmember.html',
})
export class AddmemberPage {
  public FormItem: FormGroup;
  private submitRequested: boolean

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private viewCtrl: ViewController) {
    this.FormItem = this.fb.group({
      '_id': [null],
      'idNumber': [null, [Validators.compose([Validators.pattern('[0-9]*')]), Validators.minLength(13), Validators.maxLength(13), Validators.required]],
      'tHName': [null, Validators.required],
      'department': [null, Validators.required],
      'function': [null],
      'dateOfBirth': [null],
      'address': [null],
      'education': [null],
      'dateOfExpiry': [null],
      'picture': ['../../assets/imgs/id.jpg'],
      'phoneNumber': [null, [Validators.compose([Validators.pattern('[0-9]*')]), Validators.minLength(10), Validators.maxLength(10), Validators.required]],
    });
    let _id = navParams.get('_id');
    this.FormItem.get('_id').setValue(_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddmemberPage');
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
}

