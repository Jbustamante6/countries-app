import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];//en caso de ser null el array se retorna un array vacio
    if(!searchText) return items;// en caso de no haber texto se retorna el array con todos los datos
    searchText = searchText.toLowerCase();// conversion a minusculas
    return items.filter( it => { //filtro para iteracion y retorno de las ocurrencias encontradas
      return it.name.toLowerCase().includes(searchText);//conversion a minusculas en el iterador y comparacion con el texto de busqueda
    });
   
  }

}
