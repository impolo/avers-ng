import {Component, Input} from '@angular/core';
import {Catalog} from '../model/catalog';


@Component({
  selector: 'av-coin',
  template: `      
        <a  class="card clickable">
             <div class="card-block">
               <div class="card-media-block">
                <img class="card-media-image" *ngIf="coin.image_src" [src]="coin.image_src" />
                <div class="card-media-description">
                    <p class="card-text">
                            {{coin.name}} {{coin.year }} г.
                        </p>
                    </div>
                </div>
            </div>
        </a>
  `
})
export class CoinComponent {
  @Input() coin: Catalog;

}
