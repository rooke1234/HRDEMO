import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EmployeePage } from '../pages/employee/employee';
import { FinancePage } from '../pages/finance/finance';
import { Action } from 'rxjs/scheduler/Action';
import { ActionPage } from '../pages/action/action';
import { FormPage } from '../pages/form/form';
import { PersoninfoPage } from '../pages/personinfo/personinfo';
import { AddmemberPage } from '../pages/addmember/addmember';
import { WorktablePage } from '../pages/worktable/worktable';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  department: Array<{title: string, list: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'รายชื่อพนักงาน', component: HomePage },
      { title: 'ตารางงาน', component: ListPage },
     // { title: 'เพิ่มพนักงาน', component: EmployeePage},
      { title: 'การเงิน', component: FinancePage },
      { title: 'Action', component: ActionPage},
      { title: 'ฟอร์ม', component: FormPage }
    ];

    this.department = [
      { title: 'ห้องครัว', list : 'cook' },
      { title: 'ห้องอาหาร', list: 'eat' }
    ];
   

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
