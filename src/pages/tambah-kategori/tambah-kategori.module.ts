import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TambahKategoriPage } from './tambah-kategori';

@NgModule({
  declarations: [
    TambahKategoriPage,
  ],
  imports: [
    IonicPageModule.forChild(TambahKategoriPage),
  ],
})
export class TambahKategoriPageModule {}
