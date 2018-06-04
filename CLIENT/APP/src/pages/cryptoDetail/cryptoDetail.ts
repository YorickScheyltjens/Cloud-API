import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoinServiceProvider } from '../../providers/coin-service/coin-service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'cryptoDetail.html',
})
export class CryptoDetailPage {
  details: ICryptoDetail[]; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public coinServiceProvider: CoinServiceProvider) {
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DetailPage');
    this.loadDetail(this.navParams.get('cryptoId').toString());
  }

  loadDetail(cryptoId: number)
  {
    this.coinServiceProvider.getDetail(cryptoId)
    .then(data => 
    {
       this.details = data;
        //console.log(data);
    });
  }

}



  export interface USD {
      price: number;
      volume_24h: number;
      market_cap: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
  }

  export interface EUR {
      price: number;
      volume_24h: number;
      market_cap: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
  }

  export interface Quotes {
      USD: USD;
      EUR: EUR;
  }

  export interface Data {
      id: number;
      name: string;
      symbol: string;
      website_slug: string;
      rank: number;
      circulating_supply: number;
      total_supply: number;
      max_supply: number;
      quotes: Quotes;
      last_updated: number;
  }

  export interface Metadata {
      timestamp: number;
      error?: any;
  }

  export interface ICryptoDetail {
      data: Data;
      metadata: Metadata;
  }








