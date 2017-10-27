import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  gnome_id: number;
  gnome: object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _data: DataProvider) {
    this.gnome = navParams.get("gnome");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
