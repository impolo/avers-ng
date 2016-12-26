import {Component, Optional, OnInit} from '@angular/core';
import {BackendlessapiService} from "../services/backendlessapi.service";
import {Response} from "@angular/http";
import {Catalog} from "../model/catalog"
import {BackEndlessSetup} from "../utils/backendless_setup"


@Component({
  selector: 'av-app',
  template: `<av-layout>
                <router-outlet></router-outlet>
            </av-layout>
`,
  styles: [``],

  providers: [BackendlessapiService]
})

export class AppComponent {


}
