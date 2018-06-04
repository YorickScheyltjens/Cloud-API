import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoinServiceProvider } from '../../providers/coin-service/coin-service';
import { CryptoDetailPage } from '../cryptoDetail/cryptoDetail';

@Component({
  selector: 'page-home',
  templateUrl: 'cryptoList.html'
})
export class CryptoListPage {

  list: ICryptoList[];
  global : IGlobal[];
  constructor(public navCtrl: NavController, public coinServiceProvider: CoinServiceProvider) {
    
  }
  ionViewDidLoad()
  {
    this.loadGlobal(); 
     this.loadCrypto();  
     
  }

  loadCrypto()
  {
    this.coinServiceProvider.getCrypto()
    .then(data => 
    {
        this.list = data;
        console.log(data);
    });
  }
  loadGlobal()
  {
    this.coinServiceProvider.getGlobal()
    .then(data => 
    {
        this.global = data;
        console.log(data);
    });
  } 

  openDetail(cryptoId: number)
  {
    this.navCtrl.push(CryptoDetailPage, {
        cryptoId: cryptoId
    });
  }
  
//Recourse 1
}
export interface ICryptoList {
  data?: (DataEntity)[] | null;
  metadata: Metadata;
}
export interface DataEntity {
  id: number;
  name: string;
  symbol: string;
  website_slug: string;
}
export interface Metadata {
  timestamp: number;
  num_cryptocurrencies: number;
  error?: null;
}


  export interface Status {
    timestamp: number;
    error?: any;
  }

  export interface USD {
    total_market_cap: number;
    total_volume_24h: number;
  }

  export interface EUR {
    total_market_cap: number;
    total_volume_24h: number;
  }

  export interface Quotes {
    USD: USD;
    EUR: EUR;
  }

  export interface Data {
    active_cryptocurrencies: number;
    active_markets: number;
    bitcoin_percentage_of_market_cap: number;
    quotes: Quotes;
    last_updated: number;
  }

  export interface Metadata {
    timestamp: number;
    error?: null;
  }

  export interface IGlobal {
    status: Status;
    data: Data;
    metadata: Metadata;
  }










