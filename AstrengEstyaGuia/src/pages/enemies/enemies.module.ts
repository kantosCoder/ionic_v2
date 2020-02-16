import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnemiesPage } from './enemies';

@NgModule({
  declarations: [
    EnemiesPage,
  ],
  imports: [
    IonicPageModule.forChild(EnemiesPage),
  ],
})
export class EnemiesPageModule {}
