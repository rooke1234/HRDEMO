import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController,AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AddmemberPage } from '../addmember/addmember';
import { Member } from '../../models/Member';
import { HomePage } from '../home/home';
import { DiEmdayoffPage } from '../di-emdayoff/di-emdayoff';
import { EmployeeholidayPage } from '../employeeholiday/employeeholiday';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public fb: FormBuilder,private viewCtrl: ViewController,public modalCtrl: ModalController,public alertCtrl: AlertController) {
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
  empdayoff(member: Member){
    const modal = this.modalCtrl.create("DiEmdayoffPage", {member: member });
    modal.onDidDismiss(data => {
      if (data) {
        let member = data.value;
        var index = this.members.findIndex(it => it._id == member._id);
        this.members[index] = member;
      }
    });
    modal.present();
  }

  presentModalprintcard(member: Member) {
    const modal = this.modalCtrl.create("PrintcardPage", {member: member });
    modal.onDidDismiss(data => {
      if (data) {
        let member = data.value;
        var index = this.members.findIndex(it => it._id == member._id);
        this.members[index] = member;
      }
    });
    modal.present();
  }
  Modalmembercard(member: Member){
    this.modalCtrl.create("MembercardPage",{member: member});
  }

  presentModalfingerprint(member: Member) {
    const modal = this.modalCtrl.create("DifingerprintPage", {member: member });
    modal.onDidDismiss(data => {
      if (data) {
        let member = data.value;
        var index = this.members.findIndex(it => it._id == member._id);
        this.members[index] = member;
      }
    });
    modal.present();
  }
  

  Alerttakeoff() {
    const confirm = this.alertCtrl.create({
      title: 'ยืนยันการลาออก',
      message: 'ลบนายกฤษณะ ตระกูลพรหมออกจากรายชื่อพนักงาน',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(PersoninfoPage);
          }
        }
      ]
    });
    confirm.present();
  }

  PresentEmployeeHolidayPage(){
    this.navCtrl.push(EmployeeholidayPage);
  }
}
