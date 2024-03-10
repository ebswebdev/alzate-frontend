import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PROCESOR_ADD_URL, PROCESOR_BY_RADICADO_URL, PROCESOSR_URL } from '../components/shared/constatns/urls';
import { IAddProcesoR, ProcesoR } from '../components/shared/models/ProcesoR';
import Toastify from 'toastify-js';

@Injectable({
  providedIn: 'root'
})
export class ProcesosrService {

  constructor(private http:HttpClient) { }

  getProcesosR():Observable<any>{
    return this.http.get(PROCESOSR_URL);
  }
  getProcesosRByRadicado(rad:string):Observable<ProcesoR[]>{    
    return this.http.get<ProcesoR[]>(PROCESOR_BY_RADICADO_URL+rad);
  }

  addProcesor(procesorAdd:IAddProcesoR): Observable<ProcesoR>{
    return this.http.post<ProcesoR>(PROCESOR_ADD_URL, procesorAdd).pipe(
      tap({
        next: (procesor) => {
          Toastify({
            text: `Proceso agregado con éxito a radicado ${procesor}`,
            duration: 5000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
        },
        error: (errorResponse) => {
          console.log('Error al registrar')
          Toastify({
            text: `error de creación ${errorResponse.status}`,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            className: "error",
            onClick: function(){} // Callback after click
          }).showToast();
          const error = errorResponse.status;
          if (error === 200){
            alert('creado con exito');
          }else{
            alert(`error ${errorResponse.status}`)
          }
        }
      })
    )
  }

}
