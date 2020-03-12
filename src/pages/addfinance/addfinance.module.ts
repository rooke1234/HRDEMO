import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddfinancePage } from './addfinance';

@NgModule({
  declarations: [
    AddfinancePage,
  ],
  imports: [
    IonicPageModule.forChild(AddfinancePage),
  ],
})
export class AddfinancePageModule {}
