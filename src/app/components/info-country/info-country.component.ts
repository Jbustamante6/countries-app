import { Component, OnInit } from '@angular/core';
import { CountriesServicesService } from 'src/app/services/countries-services.service';
import { Countries } from 'src/app/interfaces/countries.interfaces';

@Component({
  selector: 'app-info-country',
  templateUrl: './info-country.component.html',
  styleUrls: ['./info-country.component.scss']
})
export class InfoCountryComponent implements OnInit {
  nameCountry:string;
  country:Countries;

  constructor(private _countriesServices:CountriesServicesService) { }

  ngOnInit() {
  }

  public change(name:any){
    this.nameCountry=name;
    this._countriesServices.getFullName(this.nameCountry).subscribe(data=>{
      this.country=data[0];
    })
  }
}
