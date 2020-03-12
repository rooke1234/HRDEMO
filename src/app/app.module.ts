import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmployeePage } from '../pages/employee/employee';
import { FinancePage } from '../pages/finance/finance';
import { ActionPage } from '../pages/action/action';
import { FormPage } from '../pages/form/form';
import { PersoninfoPage } from '../pages/personinfo/personinfo';
import { SalaryPage } from '../pages/salary/salary';
import { AddmemberPage } from '../pages/addmember/addmember';
import { WorktablePage } from '../pages/worktable/worktable';
import { AddactionPage } from '../pages/addaction/addaction';
import { WorkgraphPage } from '../pages/workgraph/workgraph';
import { PersonsearchPage } from '../pages/personsearch/personsearch';
import { AddfinancePage } from '../pages/addfinance/addfinance';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EmployeePage,
    FinancePage,
    ActionPage,
    FormPage,
    PersoninfoPage,
    SalaryPage,
    AddmemberPage,
    WorktablePage,
    AddactionPage,
    WorkgraphPage,
    PersonsearchPage,
    AddfinancePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EmployeePage,
    FinancePage,
    ActionPage,
    FormPage,
    PersoninfoPage,
    SalaryPage,
    AddmemberPage,
    WorktablePage,
    AddactionPage,
    WorkgraphPage,
    PersonsearchPage,
    AddfinancePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
