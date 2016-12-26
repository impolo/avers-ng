import {Component, Input, OnInit} from '@angular/core';
import {Catalog} from '../model/catalog';
import {BackendlessapiService} from "../services/backendlessapi.service";
import {BackEndlessSetup} from "../utils/backendless_setup";

@Component({
  selector: 'av-coin-list',
  template: `
    <md-tab-group>
    <md-tab label="Новые поступления">
        <div class="card-columns">
         <av-coin *ngFor="let coin of coins" [coin]="coin"></av-coin>
        </div>
    </md-tab>
     <md-tab label="Поиск">
        <av-search></av-search>
    </md-tab>
    </md-tab-group>
  `,
  styles: [`
   
  `]
})
export class CoinListComponent implements OnInit {

  @Input() coins: Catalog[] = []

  constructor(private bs: BackendlessapiService) {
  }

  ngOnInit() {
    this.bs.getData()
      .subscribe(
        (data) => {
          data.data.map(ci => {
          //  console.log(BackEndlessSetup.IMAGE_URL + ci.objectId + "_t.jpg")
       //     console.log(1)
            this.coins.push(new Catalog(ci.name, ci.year, ci.special, BackEndlessSetup.IMAGE_URL + ci.objectId + "_a.jpg"))
          })

          //this.coins.forEach(item => console.log(item.name))
        }
      )
  }
}
