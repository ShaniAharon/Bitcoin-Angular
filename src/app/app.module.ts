import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    BitcoinAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
