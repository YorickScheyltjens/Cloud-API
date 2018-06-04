import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CryptoDetailPage } from './cryptoDetail';

@NgModule({
  declarations: [
    CryptoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CryptoDetailPage),
  ],
})
export class CryptoDetailPageModule {}
