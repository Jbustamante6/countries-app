import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {NgxPaginationModule} from 'ngx-pagination';

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DomsecurePipe } from './pipes/domsecure.pipe';
import { CountriesServicesService } from './services/countries-services.service';
import { FiltersComponent } from './components/filters/filters.component';
import { InfoCountryComponent } from './components/info-country/info-country.component';
import { MapsComponent } from './components/maps/maps.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DomsecurePipe,
    FiltersComponent,
    InfoCountryComponent,
    MapsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBg2Wrv0zHJ8bvXK4CA7Tp8e6r6or2R1rc'
    })
  ],
  providers: [
    CountriesServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
