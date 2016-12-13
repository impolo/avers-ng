import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import {AppComponent} from './app.component';
import { HighlightDirective } from './highlight.directive';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBATDm9b8Z9KRl0H5q2CeHQsJlrKJdpha",
  authDomain: "avers-c3d89.firebaseapp.com",
  databaseURL: "https://avers-c3d89.firebaseio.com/",
  storageBucket: "gs://avers-c3d89.appspot.com/Catalog/"
};

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  declarations: [AppComponent, HighlightDirective],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor() {

  }

}
