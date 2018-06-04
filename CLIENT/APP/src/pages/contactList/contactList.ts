import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoinServiceProvider } from '../../providers/coin-service/coin-service';
import { ContactDetailPage} from '../contactDetail/contactDetail';
/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contactList.html',
})
export class ContactListPage {
  contacts: IContactList[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public coinServiceProvider: CoinServiceProvider) {
  }

  ionViewDidLoad() {
    this.loadContacts();
  }
  loadContacts()
  {
    this.coinServiceProvider.getContacts()
    .then(data => 
    {
        this.contacts = data;
    });
  }

  openDetail(contactId: number)
  {
    this.navCtrl.push(ContactDetailPage, {
        contactId: contactId
    });
  }
}

export interface IContactList
{
    id: number;
    name: string;
    firstName: string;
    age: number;
    gender: string;
}
