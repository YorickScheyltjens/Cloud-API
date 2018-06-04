import { Component } from '@angular/core';
import { NavController, List, ToastController } from 'ionic-angular';
import { CryptoListPage } from '../cryptoList/cryptoList';
import { ContactListPage } from '../contactList/contactList';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth,private toast: ToastController, public navCtrl: NavController) {
    
  }
  ionViewDidLoad()
  { 
     this.afAuth.authState.subscribe(data =>
    {
        if(data.email)
        {
          this.toast.create(
            {
              message: "Welcome to the app",
              duration: 3000
            }).present();
          
        }
        else
        {
           this.toast.create({
             message: 'Could nog find authentication dateails',
             duration: 3000
           }).present();
        }
    })
  }

  showCrypto()
  {
    this.navCtrl.push(CryptoListPage);
  }
  showContacts()
  {
    this.navCtrl.push(ContactListPage);
  }

  
}




