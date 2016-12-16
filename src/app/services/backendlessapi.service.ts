import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs/Rx'
import {BackEndlessSetup} from '../utils/backendless_setup'

@Injectable()
export class BackendlessapiService {

  constructor(private http: Http) {
  }

  getData() {
    let headers = new Headers()
    headers.append("application-id", BackEndlessSetup.APP_ID)
    headers.append("secret-key", BackEndlessSetup.REST_KEY)
    headers.append("application-type", "REST")
    let options = new RequestOptions({headers: headers});
    return this.http.get(BackEndlessSetup.DATA_URL + "Catalog?pageSize=30&sortBy=created%20desc", options)
      .map((response: Response) => response.json())
  }


}
