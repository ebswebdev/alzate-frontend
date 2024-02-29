import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../partial/header/header.component';
import { FooterComponent } from '../../partial/footer/footer.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserRegister, User } from '../../shared/models/User';
import { UsuariosService } from '../../../services/usuarios.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,HeaderComponent, FooterComponent, FormsModule, ReactiveFormsModule, AsyncPipe, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitted = false;

  abogadoLista!: Observable<User[]>;

  returnUrl = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService: LoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private abogados:UsuariosService
  ) {
  }
  
  ngOnInit(): void {
    this.abogadoLista = this.abogados.getAbogados();
    this.registerForm = this.formBuilder.group({
      cedula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.email]],
      contrasena: ['querty'],
      direccion: [''],
      isAdmin: [false],
      telefono: [''],
      abogado: ['', [Validators.required]],
      rol: ['usuario'],
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUr'];
  }
  get fc() {
    return this.registerForm.controls;
  }
  submit() {
    this.isSubmitted = true;
    
    if (this.registerForm.invalid) {
      console.log(this.registerForm.value);
      
      return};

    const fv = this.registerForm.value;
    const user: IUserRegister = {
      cedula: fv.cedula,
      nombre: fv.nombre,
      correo: fv.correo,
      contrasena: fv.contrasena,
      direccion: fv.direccion,
      isAdmin: fv.isAdmin,
      telefono: fv.telefono,
      abogado: fv.abogado,
      rol: fv.rol,
    };

    this.returnUrl = '/usuario/'+user.cedula;
    
    this.userService.register(user).subscribe((_) => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }




}
