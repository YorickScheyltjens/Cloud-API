import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICryptoList, IGlobal } from '../../pages/cryptoList/cryptoList';
import { ICryptoDetail } from '../../pages/cryptoDetail/cryptoDetail';
import { IContactList } from '../../pages/contactList/contactList';
import { resolveDefinition } from '@angular/core/src/view/util';

/*
  Generated class for the CoinServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoinServiceProvider {

  constructor(public http: HttpClient) {
    
  }

  getCrypto(): Promise<ICryptoList[]> {
    return new Promise(resolve => 
    {
        this.http.get<ICryptoList[]>("https://api.coinmarketcap.com/v2/listings/").subscribe(data =>
        {
          resolve(data);
        }, err =>
        {
            console.log(err);
        });
    });
  }
  getDetail(cryptoId: number): Promise<ICryptoDetail[]> {
    return new Promise(resolve => 
    {
        this.http.get<ICryptoDetail[]>("https://api.coinmarketcap.com/v2/ticker/"+cryptoId+"/?convert=EUR").subscribe(data =>
        {
          resolve(data);
        }, err =>
        {
            console.log(err);
        });
    });
  }
  getGlobal(): Promise<IGlobal[]> {
    return new Promise(resolve => 
      {
          this.http.get<IGlobal[]>("https://api.coinmarketcap.com/v2/global/?convert=EUR").subscribe(data =>
          {
            resolve(data);
          }, err =>
          {
              console.log(err);
          });
      });
  }

  getContacts(): Promise<IContactList[]> {
    return new Promise(resolve => 
    {
      this.http.get<IContactList[]>("http://localhost:5000/api/v1/contacts/").subscribe(data => 
      {
          resolve(data);
      }, err => 
      {
          console.log(err);    
      });
    });
  }

}