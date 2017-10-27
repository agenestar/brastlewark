import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { FilterPage } from '../filter/filter';
import { DetailPage } from '../detail/detail';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  gnomes = [];
  filter: Object = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private _data: DataProvider, private storage: Storage, public loading: LoadingController, public modalCtrl: ModalController) {

    let loader = this.loading.create({
      content: 'Getting gnomes ...',
    });

    loader.present().then(() => {
      
      this.storage.get('filter').then((value) => {
        if (value)
          this.filter = value;
        
        this._data.getGnomes(this.filter)
          .subscribe(res => this.gnomes = res);
      });
      
      this.storage.get('order').then((value) => {
        // TODO
      });

      setTimeout(() => loader.dismiss(), 500);
    })

  }

  openFilter() {
    let modal = this.modalCtrl.create(FilterPage);

    modal.onDidDismiss(() => {

      /*let loader = this.loading.create({
        content: 'Getting gnomes ...',
      });

      this.filter = filter;
      this._data.getGnomes(this.filter)
          .subscribe(res => this.gnomes = res);

      loader.dismiss();*/
    })

    modal.present();
  }

  openDetailPage(gnome) {
    this.navCtrl.push(DetailPage, { gnome: gnome})
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
