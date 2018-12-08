import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countries } from 'src/app/interfaces/countries.interfaces';
import { CountriesServicesService } from 'src/app/services/countries-services.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  countries:Countries[]=[];

  constructor(private route: ActivatedRoute, private _countriesServices:CountriesServicesService) { }

  ngOnInit() {
    /*
    1. Captura de datos cargados en el quiery de la URL
    2. Carga del servicio en caso de que haya parametros añadido en la ur
    3. Captura de los datos, para mostrar en el template
     */
    this.route.queryParams.subscribe(params => {
      if(params.data!=""){
        this._countriesServices.getFilter(params.data).subscribe(data=>{
          this.countries=data;
        })
      }
    });

  }

}
