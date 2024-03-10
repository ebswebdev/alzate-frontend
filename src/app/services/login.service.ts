import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User, IUserLogin, IUserRegister } from '../components/shared/models/User';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {USER_LOGIN_URL, USER_REGISTER_URL}  from '../components/shared/constatns/urls';
import Toastify from 'toastify-js';

const USER_KEY = 'User'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable!:Observable<User>;
  constructor(private http:HttpClient, private toastrService:ToastrService) {
    //this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) =>{
         // this.userSubject.next(user);
          Toastify({
            text: `login exitoso ${user.nombre}`,
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
          Toastify({
            text: `Error ${errorResponse.status} ${errorResponse.error}`,
            duration: 5000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            className: "error",
          }).showToast();
          
        }
      })
    );
  }
  logout(){
    //this.userSubject.next(new User());
    //sessionStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user:User){
    if(sessionStorage)
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage():User{
    const userJson = sessionStorage?.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }


  register(userRegiser:IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegiser).pipe(
      tap({
        next: (user) => {
          Toastify({
            text: `Usuario registrado con éxito ${user.nombre}`,
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
          Toastify({
            text: `Error ${errorResponse.status} ${errorResponse.error}`,
            duration: 5000,
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
