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

  /* 
  1. funcion invocada en componente padre
  2. invocacion del service
  3. captura de los datos para mostrar en el template
  */
  public change(name:any){
    this.nameCountry=name;
    this._countriesServices.getFullName(this.nameCountry).subscribe(data=>{
      this.country=data[0];
    })
  }
}
