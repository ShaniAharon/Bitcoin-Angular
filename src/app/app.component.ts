import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mister-bitcoin-try';
  currPage: string = 'home'

  toContacts(){
    this.currPage = 'contacts'
  }
  toHome(){
    this.currPage = 'home'
  }
}
