export class User {
    nombre: string
    cedula: string
    correo: string
    telefono: string
    direccion: string
    abogado: string
    rol: string
     constructor(nombre:string, cedula: string, correo: string,telefono: string, direccion: string, abogado: string, rol: string) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.correo= correo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.abogado = abogado;
        this.rol = rol;
    }
  }