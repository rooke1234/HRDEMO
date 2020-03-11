import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorktablePage } from './worktable';

@NgModule({
  declarations: [
    WorktablePage,
  ],
  imports: [
    IonicPageModule.forChild(WorktablePage),
  ],
})
export class WorktablePageModule {}
