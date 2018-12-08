import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesServicesService } from '../../services/countries-services.service';
import { Countries } from '../../interfaces/countries.interfaces';
import { InfoCountryComponent } from '../info-country/info-country.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { MapsComponent } from '../maps/maps.component';

declare var $:any;//declaracion de la variable de jquery

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //caaptura de los componentes hijos
  @ViewChild('infoCountry') infoCountry:InfoCountryComponent;
  @ViewChild('maps') maps:MapsComponent;

  countries:Countries[]=[];
  country:string;

  constructor(private _countriesServices:CountriesServicesService) { }

  ngOnInit() {
       
    this._countriesServices.getAll().subscribe(data=>{
      this.countries=data; //captura de los datos
    })

  }
  thisCountry(country:string, lat:number, long:number){
    this.country=country; //seleccion de nombre para mostrar en el modal y enviar la peticion a los servicios
    this.infoCountry.change(this.country);// envio de parametro y ejecucion de funcion de componenes hijos
    this.maps.changeLtLng(lat, long);
    $('#exampleModal').modal('show'); //Apertura del modal
  }



}
