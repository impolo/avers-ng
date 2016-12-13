import {Component, Optional, OnInit} from '@angular/core';
import {BackendlessapiService} from "./backendlessapi.service";
import {Response} from "@angular/http";
import {Catalog} from "./model/catalog"
import {BackEndlessSetup} from "./utils/backendless_setup"

@Component({
  selector: 'fa-app',
  templateUrl: 'app.component.html',
  providers: [BackendlessapiService]
})

export class AppComponent implements OnInit {
  isDarkTheme: boolean = false;

  items: Catalog[] = []

  constructor(private bs: BackendlessapiService) {
  }

  ngOnInit() {
    this.bs.getData()
      .subscribe(
        (data) => {
          data.data.map(ci => {
            console.log(BackEndlessSetup.IMAGE_URL + ci.objectId + "_t.jpg")
            this.items.push(new Catalog(ci.name, ci.year, ci.special, BackEndlessSetup.IMAGE_URL + ci.objectId + "_a.jpg"))
          })

          this.items.forEach(item => console.log(item.name) )
        }
      )
  }

}
