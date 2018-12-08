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
    this.route.queryParams.subscribe(params => {
      if(params.data!=""){
        this._countriesServices.getFilter(params.data).subscribe(data=>{
          this.countries=data;
        })
      }
    });

  }

}
