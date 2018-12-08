import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CONFIG } from '../classes/api.class';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class CountriesServicesService {

 
  constructor( private http:Http) { }
  /*
  Invocacion de los web services via http
   */
  getAll(){
    return this.http.get(`${CONFIG.api}/all`).map(resp=>{return resp.json()});
  }

  getFilter(query:string){
    return this.http.get(`${CONFIG.api}/all?fields=${query}`).map(resp=>{return resp.json()});
  }

  getFullName(name){
    return this.http.get(`${CONFIG.api}/name/${name}?fullText=true`).map(resp=>{return resp.json()});
  }
}
