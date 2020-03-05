import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembercardPage } from './membercard';

@NgModule({
  declarations: [
    MembercardPage,
  ],
  imports: [
    IonicPageModule.forChild(MembercardPage),
  ],
})
export class MembercardPageModule {}
