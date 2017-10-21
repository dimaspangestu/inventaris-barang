import {Component} from '@angular/core'
import {NavController} from 'ionic-angular'
import {DetailPage} from '../detail/detail'
import {DaftarBarangPage} from '../daftar-barang/daftar-barang'
import {TambahKategoriPage} from '../tambah-kategori/tambah-kategori'

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {

    public daftarKategori : Array <{
        nama: string,
        jumlahBarang: number,
        gambar: string
    }>
    
    semuaDaftarKategori : Array <{
        nama: string,
        jumlahBarang: number,
        gambar: string
    }>
    
    daftarBarang : Array <{
        nama: string,
        kategori: string,
        jumlah: number,
        gambar: string,
        harga: number
    }>
    
    prosesPencarian : boolean = false

    constructor(public navCtrl : NavController) {
        this.initSemuaDaftarKategori()
        this.initDaftarKategori()
        this.initDaftarBarang()
    }


    public getDaftarKategori() {
        this.initSemuaDaftarKategori()
        this.initDaftarBarang()

        return this.daftarKategori
    }

    initSemuaDaftarKategori() {
        this.semuaDaftarKategori = [
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

    initDaftarKategori() {
        this.daftarKategori = this.semuaDaftarKategori
    }

    initDaftarBarang() {
        this.daftarBarang = [
            {
                nama: 'Personal Computer',
                kategori: 'Inventaris Lab',
                jumlah: 10,
                gambar: 'pc.jpg',
                harga: 12000000
            }
        ];
    }

    keHalamanDaftarBarang(kategori) {
        let daftarBarang = []

        for (let item of this.daftarBarang) {
            if (item.kategori === kategori.nama) 
                daftarBarang.push(item)
        }

        this.navCtrl
            .push(DaftarBarangPage, {
                'daftarBarang': daftarBarang,
                'kategori': kategori.nama
            })
    }

    cariKategori(ev : any) {
        this.initDaftarKategori()
        this.prosesPencarian = true
        let input = ev.target.value

        if (input && input.trim() != '') {
            this.daftarKategori = this.daftarKategori.filter((item) => {
                    return (item.nama.toLowerCase().indexOf(input.toLowerCase()) > -1);
                })
        }
    }

    tambahKategori() {
        this.navCtrl.push(TambahKategoriPage)
    }

}
