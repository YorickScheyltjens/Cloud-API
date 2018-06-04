import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, List } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoinServiceProvider } from '../providers/coin-service/coin-service';
import { CryptoDetailPage } from '../pages/cryptoDetail/cryptoDetail';
import { CryptoListPage } from '../pages/cryptoList/cryptoList';
import { ContactListPage } from '../pages/contactList/contactList';
import { LoginPage } from '../pages/login/login';
import { ContactDetailPage } from '../pages/contactDetail/contactDetail';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CryptoDetailPage,
    CryptoListPage,
    ContactListPage,
    ContactDetailPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CryptoDetailPage,
    CryptoListPage,
    ContactListPage,
    ContactDetailPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoinServiceProvider
  ]
})
export class AppModule {}
