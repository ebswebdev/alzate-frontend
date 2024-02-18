export class User {
    nombre!: string
    cedula!: string
    correo!: string
    contrasena!:string
    telefono!: string
    direccion!: string
    abogado!: string
    rol!: string
    isAdmin: boolean = false;
  }

export interface IUserLogin{
  correo:string,
  contrasena:string
}

export  interface IUserRegister {
  nombre: string,
  cedula: string,
  correo: string,
  contrasena:string,
  telefono: string,
  direccion: string,
  abogado: string,
  rol: string,
  isAdmin: boolean;
}