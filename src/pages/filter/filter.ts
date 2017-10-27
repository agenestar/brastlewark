import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  filterOptions =  {
    hairColors: [],
    profesions: []
  };
  filter: Object
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public viewCtrl: ViewController, private _data: DataProvider) {
    this._data.getFilterOptions().subscribe(res => {
      this.filterOptions.hairColors = res.hairColors;
      this.filterOptions.profesions = res.profesions;
    }); 
  }

  ionViewDidEnter() {
    this.storage.get('filter').then(value => {
      this.filter = value ? value : {};
    })
  }

  search() {
    this.storage.set('filter', this.filter);
    this.viewCtrl.dismiss(this.filter);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

}
