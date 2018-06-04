import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IContactList } from '../contactList/contactList';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contactDetail.html',
})
export class ContactDetailPage {
  //contact: IContacts;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadContact(this.navParams.get('contactId').toString());
  }

  loadContact(contactId: Number)
  {

  }

}
