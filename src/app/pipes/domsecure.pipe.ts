import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domsecure'
})
export class DomsecurePipe implements PipeTransform {

  constructor (private domSanitizer:DomSanitizer){}

  transform(value: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);//evaluacion de seguirdad para hacer uso de elemtos externos http en el dom
  }

}
