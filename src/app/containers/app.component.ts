import {Component, Optional, OnInit} from '@angular/core';
import {BackendlessapiService} from "../services/backendlessapi.service";
import {Response} from "@angular/http";
import {Catalog} from "../model/catalog"
import {BackEndlessSetup} from "../utils/backendless_setup"


@Component({
  selector: 'av-app',
  template: `<av-layout>
              <av-toolbar>
                Каталог монет
              </av-toolbar>            
              <router-outlet></router-outlet>
            </av-layout>
`,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    md-card {
      width: 400px;
      height: 200px;
      margin: 15px;
    }
    md-card-title {
      margin-right: 10px;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    img {
      width: 200px;
      height: 200px;
      min-width: 200px;
      margin-left: 5px;
    }
    md-card-content {
      margin-top: 15px;
    }
    span {
      display: inline-block;
      font-size: 13px;
    }
    md-card-footer {
      padding: 0 25px 25px;
    }
  `],

  providers: [BackendlessapiService]
})

export class AppComponent {


}
