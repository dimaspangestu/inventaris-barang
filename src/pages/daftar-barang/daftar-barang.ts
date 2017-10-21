import {Component} from '@angular/core'
import {IonicPage, NavController, NavParams} from 'ionic-angular'
import {DetailPage} from '../detail/detail'
import {TambahBarangPage} from '../tambah-barang/tambah-barang'

@IonicPage()
@Component({selector: 'page-daftar-barang', templateUrl: 'daftar-barang.html'})
export class DaftarBarangPage {

    // Daftar barang yang akan diolah saat proses pencarian
    daftarBarang : Array <{
        nama: string,
        kategori: string,
        jumlah: number,
        gambar: string,
        harga: number
    }>

    // Daftar barang sebelum pencarian
    semuaDaftarBarang : Array <{
        nama: string,
        kategori: string,
        jumlah: number,
        gambar: string,
        harga: number
    }>

    kategori: string

    prosesPencarian: boolean = false

    constructor(public navCtrl : NavController, public navParams : NavParams) {
        this.semuaDaftarBarang = navParams.get('daftarBarang')
        this.kategori = navParams.get('kategori')
        this.initDaftarBarang()
    }

    initDaftarBarang() {
        this.daftarBarang = this.semuaDaftarBarang
    }

    keHalamanDetail(barang) {
        this.navCtrl.push(DetailPage, {
            'barang': barang
        })
    }

    tambahBarang() {
        this.navCtrl.push(TambahBarangPage)
    }

    cariBarang(ev: any) {
        this.initDaftarBarang()
        
        this.prosesPencarian = true
        let input = ev.target.value

        this.daftarBarang = this.daftarBarang.filter((item) => {
            return (item.nama.toLowerCase().indexOf(input.toLowerCase()) > -1)
        })
    }

}
