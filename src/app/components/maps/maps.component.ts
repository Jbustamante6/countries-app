import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  lat:number;
  long:number;
  constructor() { }

  ngOnInit() {
  }
  /* 
  1. funcion invocada en componente padre
  2. invocacion del service
  3. captura de los datos para mostrar en el mapa
  */
  public changeLtLng(lat:number, long:number){
    this.lat=lat;
    this.long=long;
  }
}
