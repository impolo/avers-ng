import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './containers/not-found-page';
import {CoinListComponent} from "./containers/coin_list";

export const routes: Routes = [
  {
    path: '',
    component: CoinListComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
