import {Component} from '@angular/core'
import {IonicPage, NavController, NavParams} from 'ionic-angular'
import {HomePage} from '../home/home'

/**
 * Generated class for the TambahKategoriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({selector: 'page-tambah-kategori', templateUrl: 'tambah-kategori.html'})
export class TambahKategoriPage {

    constructor(public navCtrl : NavController, public navParams : NavParams) {}

    kembaliKeDaftarKategori() {
        this.navCtrl.popTo(HomePage)
    }

}
