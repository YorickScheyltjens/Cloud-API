import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CryptoListPage } from './cryptoList';

@NgModule({
  declarations: [
    CryptoListPage,
  ],
  imports: [
    IonicPageModule.forChild(CryptoListPage),
  ],
})
export class CryptoListPageModule {}
