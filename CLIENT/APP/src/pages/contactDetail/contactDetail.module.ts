import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactDetailPage } from './contactDetail';

@NgModule({
  declarations: [
    ContactDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactDetailPage),
  ],
})
export class ContactDetailPageModule {}
