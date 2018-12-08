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

  public changeLtLng(lat:number, long:number){
    this.lat=lat;
    this.long=long;
  }
}
