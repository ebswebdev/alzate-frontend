import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, cedula: string): any {
    if (!cedula) return value;
    var listaUSers = [];
    listaUSers = value.filter((item: any): any => {
      if (cedula) {
        return item.cedula.toLowerCase().indexOf(cedula.toLowerCase()) !== -1;
      }
    });
    if (listaUSers.length == 0) {      
      listaUSers = value.filter((item: any): any => {
        return item.nombre.toLowerCase().indexOf(cedula.toLowerCase()) !== -1;
      });
    }
    return listaUSers;
  }
}
