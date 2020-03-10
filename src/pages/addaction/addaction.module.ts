import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddactionPage } from './addaction';

@NgModule({
  declarations: [
    AddactionPage,
  ],
  imports: [
    IonicPageModule.forChild(AddactionPage),
  ],
})
export class AddactionPageModule {}
