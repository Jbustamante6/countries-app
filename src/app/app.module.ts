import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DomsecurePipe } from './pipes/domsecure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DomsecurePipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
