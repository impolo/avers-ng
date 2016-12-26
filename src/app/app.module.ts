import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ComponentsModule } from './components';
import {AppComponent} from './containers/app.component';
import { routes } from './routes';
import {RouterModule} from "@angular/router";
import {NotFoundPageComponent} from "./containers/not-found-page";
import {CoinListComponent} from "./containers/coin_list";
import {CoinComponent} from "./components/coin";
import { SearchComponent } from './containers/search.component';
import { ClarityModule } from 'clarity-angular';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    ClarityModule.forChild(),
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    CoinComponent,
    NotFoundPageComponent,
    CoinListComponent,
    SearchComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor() {

  }

}
