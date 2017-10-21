import {BrowserModule} from '@angular/platform-browser'
import {ErrorHandler, NgModule} from '@angular/core'
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular'
import {SplashScreen} from '@ionic-native/splash-screen'
import {StatusBar} from '@ionic-native/status-bar'
import {DetailPage} from '../pages/detail/detail'
import {MyApp} from './app.component'
import {HomePage} from '../pages/home/home'
import {HalamanBaruPage} from '../pages/halaman-baru/halaman-baru'
import {DaftarBarangPage} from '../pages/daftar-barang/daftar-barang'
import {TambahKategoriPage} from '../pages/tambah-kategori/tambah-kategori'
import {TambahBarangPage} from '../pages/tambah-barang/tambah-barang'

@NgModule({
    declarations: [
        MyApp, HomePage, HalamanBaruPage, DetailPage, DaftarBarangPage, TambahBarangPage, TambahKategoriPage
    ],
    imports: [
        BrowserModule, IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp, HomePage, HalamanBaruPage, DetailPage, DaftarBarangPage, TambahBarangPage, TambahKategoriPage
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
