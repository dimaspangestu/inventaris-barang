import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HalamanBaruPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({selector: 'page-halaman-baru', templateUrl: 'halaman-baru.html'})
export class HalamanBaruPage {

    constructor(public navCtrl : NavController, public navParams : NavParams) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad HalamanBaruPage');
    }

}
