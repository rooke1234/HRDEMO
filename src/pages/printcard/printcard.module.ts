import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrintcardPage } from './printcard';

@NgModule({
  declarations: [
    PrintcardPage,
  ],
  imports: [
    IonicPageModule.forChild(PrintcardPage),
  ],
})
export class PrintcardPageModule {}
