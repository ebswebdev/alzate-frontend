import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IAddRadicado, Radicado } from '../components/shared/models/Radicado';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { RADICADOS_URL, RADICADO_ADD_URL, RADICADO_BY_USER_URL, RADICADO_STATUS } from '../components/shared/constatns/urls';
import Toastify from 'toastify-js';

@Injectable({
  providedIn: 'root'
})
export class RadicadosService {

  constructor(private http:HttpClient) { }

  getRadicados():Observable<any>{
    return this.http.get(RADICADOS_URL);
  }
  getRadicadosByUser(ced:string):Observable<Radicado[]>{    
    return this.http.get<Radicado[]>(RADICADO_BY_USER_URL+ced);
  }

  getRadicadosByNumero(numero:string):Observable<Radicado>{
    return this.http.get<Radicado>(RADICADO_BY_USER_URL+'id/'+numero);
  }

  putRadicadoEstado(rad:string):Observable<Radicado> {      
    console.log("ruta",RADICADO_STATUS+rad);
    
    return this.http.put<Radicado>(RADICADO_STATUS+rad, '').pipe(
      tap({
        next: (radicado) => {
          Toastify({
            text: `Radicado actualizado ${radicado}`,
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
          const error = errorResponse.status;
          Toastify({
            text: `Error ${errorResponse.error}`,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            className: "error",
           
          }).showToast();
        }
      })
    )
  }

  addRadicado(radicadoAdd:IAddRadicado): Observable<Radicado>{
    return this.http.post<Radicado>(RADICADO_ADD_URL, radicadoAdd).pipe(
      tap({
        next: (radicado) => {
          Toastify({
            text: `Proceso agregado con éxito a radicado ${radicado}`,
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
          const error = errorResponse.status;
          Toastify({
            text: `Error ${errorResponse.error}`,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            className: "error",
           
          }).showToast();
        }
      })
    )
  }

}
