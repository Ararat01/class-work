import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }

  get(url: string) {
    return this.http.get(url)
  }

  delete(url: string) {
    return this.http.delete(url)
  }

  post(url: string, user: object) {
    return this.http.post(url, user)
  }
}
