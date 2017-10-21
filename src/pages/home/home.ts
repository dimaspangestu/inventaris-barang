import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {

    daftarKategori: Array<{nama: string, jumlahBarang: number}>
    
    daftarBarang: Array<{nama: string, kategori: string, jumlah: number, lokasi: string, gambar: string, harga: number}>
    
    constructor(public navCtrl : NavController) {
        this.daftarBarang = [
            {nama: 'Meja', kategori: 'Furniture', jumlah: 10, lokasi: 'Lab MMK', gambar: 'barang1.jpg', harga: 75000}
        ];
        this.daftarKategori = [
            {nama: 'Inventaris Lab', jumlahBarang: 10},
            {nama: 'Inventaris Pribadi', jumlahBarang: 7},
            {nama: 'Inventaris Rumah', jumlahBarang: 6}
        ]
    }
    
    detailPage(item) {
        console.log(item)
        this.navCtrl.push(DetailPage, {
            barang: item
        });
    }
    
    getItems(ev: any) {
        let input = ev.target.value
        
        console.log(input)
    }
    
}
