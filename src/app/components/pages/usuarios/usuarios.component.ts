import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../partial/header/header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilterPipe } from '../../filtros/filter.pipe';
import { FormsModule } from '@angular/forms';
import { USERS_URL } from '../../shared/constatns/urls';
import { User } from '../../shared/models/User';
import { Observable } from 'rxjs';
import { UsuariosService } from '../../../services/usuarios.service';
import { FooterComponent } from '../../partial/footer/footer.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, HttpClientModule, HeaderComponent, RouterLink, FilterPipe, FormsModule, AsyncPipe, FooterComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})

export class UsuariosComponent implements OnInit {

  filterUser = '';

  public title = 'Usuarios';
  public Usuarios!:Observable<any>;

  constructor(private userService:UsuariosService) {  }

  ngOnInit(): void {
    this.Usuarios = this.userService.getUsuariosList();
  }

  showClear() {
    return this.filterUser !== '';
  }

  clearInput(){
    this.filterUser='';
    console.log("limpio");
    
  }
 


}
