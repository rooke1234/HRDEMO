import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersoninfoPage } from './personinfo';

@NgModule({
  declarations: [
    PersoninfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PersoninfoPage),
  ],
})
export class PersoninfoPageModule {}
