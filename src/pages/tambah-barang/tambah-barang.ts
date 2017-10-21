import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({selector: 'page-tambah-barang', templateUrl: 'tambah-barang.html'})
export class TambahBarangPage {

    daftarKategori : Array <{
        nama: string,
        jumlahBarang: number,
        gambar: string
    }>

    constructor(public navCtrl : NavController, public navParams : NavParams) {
        this.initDaftarKategori()
    }

    initDaftarKategori() {
        this.daftarKategori = [
            {
                nama: 'Inventaris Lab',
                jumlahBarang: 10,
                gambar: 'labkomp.jpg'
            }, {
                nama: 'Inventaris Pribadi',
                jumlahBarang: 7,
                gambar: 'handphone.jpg'
            }, {
                nama: 'Inventaris Rumah',
                jumlahBarang: 6,
                gambar: 'alatrumahtangga.jpg'
            }
        ]
    }

    kembali() {
        this.navCtrl.pop()
    }

}
