import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {  
  name:boolean=false;
  language:boolean=false;
  region:boolean=false;
  capital:boolean=false;
  callingCodes:boolean=false;
  filters:any[]=[];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  fiter(){
    let queryString:string="";
    if(this.name){
      this.filters.push("name");
    }

    if(this.region){
      this.filters.push("region");
    }

    if(this.language){
      this.filters.push("languages");
    }

    if(this.capital){
      this.filters.push("capital");
    }

    if(this.callingCodes){
      this.filters.push("callingCodes");
    }

    if(this.filters.length>0){
      for(let i=0; i<this.filters.length; i++){
        if(i==0){
          queryString+=this.filters[i]
        }else{
          queryString+=";"+this.filters[i];
        }
      }
      this.filters=[];
      this.name=false;
      this.language=false;
      this.region=false;
      this.capital=false;
      this.callingCodes=false;
      this.router.navigate(['/filters'], {queryParams:{data:queryString}});
    }
  }
}
