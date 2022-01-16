import { HttpClient } from '@angular/common/http';
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

}
