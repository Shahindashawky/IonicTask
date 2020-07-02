import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  url='http://tindiostag.tindio.com/api/home';

  constructor(public http: HttpClient) { }

  getDetails(param) {
    return this.http.get(this.url+param);
    
  }
}
