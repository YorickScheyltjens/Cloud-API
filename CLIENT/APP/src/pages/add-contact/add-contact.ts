import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoinServiceProvicer, CoinServiceProvider} from '../../providers/coin-service/coin-service';

/**
 * Generated class for the AddContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContactPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public coinProvider: CoinServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactPage');
  }
  contact = {
    Name: '',
    FirstName: '',
    Age: '',
    Gender: ''
  }
  logForm()
  {
    this.coinProvider.addContact(JSON.stringify(this.contact))
    .then(data=> 
    {
        if(data=="true")
        {

        }      
    })
  }

}
