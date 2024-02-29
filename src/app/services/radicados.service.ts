import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IAddRadicado, Radicado } from '../components/shared/models/Radicado';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { RADICADOS_URL, RADICADO_ADD_URL, RADICADO_BY_USER_URL } from '../components/shared/constatns/urls';

@Injectable({
  providedIn: 'root'
})
export class RadicadosService {

  constructor(private http:HttpClient) { }

  getRadicados():Observable<any>{
    return this.http.get(RADICADOS_URL);
  }
  getRadicadosByUser(ced:string):Observable<Radicado[]>{
    console.log("ruta radicados",RADICADO_BY_USER_URL+ced);
    
    return this.http.get<Radicado[]>(RADICADO_BY_USER_URL+ced);
  }

  getRadicadosByNumero(numero:string):Observable<Radicado>{
    return this.http.get<Radicado>(RADICADO_BY_USER_URL+'id/'+numero);
  }

  addRadicado(radicadoAdd:IAddRadicado): Observable<Radicado>{
    return this.http.post<Radicado>(RADICADO_ADD_URL, radicadoAdd).pipe(
      tap({
        next: (radicado) => {
          console.log("radicado", radicado);
        },
        error: (errorResponse) => {
          console.log('Error al registrar')
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
