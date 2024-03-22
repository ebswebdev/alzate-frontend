import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USERS_URL, USER_BY_ID_URL } from '../components/shared/constatns/urls';
import { User } from '../components/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  getUsuariosList():Observable<any>{
    return this.http.get(USERS_URL);
  }
  getUsuarioId(ced:string):Observable<User>{    
    return this.http.get<User>(USER_BY_ID_URL+ced);
  }

  getAbogados():Observable<any>{
    return this.http.get(USER_BY_ID_URL+'abogados');
  }
}
