import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {DetailPage} from '../pages/detail/detail';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {HalamanBaruPage} from '../pages/halaman-baru/halaman-baru';
import {DaftarKategoriPage} from '../pages/daftar-kategori/daftar-kategori';

@NgModule({
  declarations: [
    MyApp, HomePage, HalamanBaruPage, DetailPage, DaftarKategoriPage
  ],
  imports: [
    BrowserModule, IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, HomePage, HalamanBaruPage, DetailPage, DaftarKategoriPage
  ],
  providers: [
    StatusBar,
    SplashScreen, {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}
