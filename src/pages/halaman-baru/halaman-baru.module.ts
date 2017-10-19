import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HalamanBaruPage } from './halaman-baru';

@NgModule({
  declarations: [
    HalamanBaruPage,
  ],
  imports: [
    IonicPageModule.forChild(HalamanBaruPage),
  ],
})
export class HalamanBaruPageModule {}
