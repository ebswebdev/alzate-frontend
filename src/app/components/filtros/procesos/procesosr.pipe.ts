import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'procesosr',
  standalone: true
})
export class ProcesosrPipe implements PipeTransform {

  transform(value: any, rad: string): any {
    if (!rad) return value;
    var listaUProcesosR = [];
    listaUProcesosR = value.filter((item: any): any => {
      if (rad) {
        return item.radicado == rad;
      }
    });
    return listaUProcesosR;
  }

}
