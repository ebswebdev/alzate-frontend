import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../partial/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuariosService } from '../../../services/usuarios.service';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  public Usuario!:Observable<User>;
  public cedula:string = '';

  constructor(private userService:UsuariosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cedula = params['user'];
    });

    this.Usuario = this.userService.getUsuarioId(this.cedula);
    console.log("usuario",this.Usuario);
    
  }

}
