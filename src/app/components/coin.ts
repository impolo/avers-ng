import {Component, Input} from '@angular/core';
import {Catalog} from '../model/catalog';


@Component({
  selector: 'av-coin',
  template: `
      <md-card>
        <img md-card-md-image *ngIf="coin.image_src" [src]="coin.image_src"/>
        <md-card-title-group>         
          <md-card-title>{{ coin.name }}</md-card-title>
          <md-card-subtitle >{{ coin.year }} г.</md-card-subtitle>
        </md-card-title-group>
        <md-card-content>
          <p *ngIf="coin.special">{{ coin.special }}</p>
        </md-card-content>

      </md-card>
  `,
  styles: [`
    
  `]
})
export class CoinComponent {
  @Input() coin: Catalog;

}
