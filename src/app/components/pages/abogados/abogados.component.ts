import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../partial/header/header.component';
import { FooterComponent } from '../../partial/footer/footer.component';
import { Observable } from 'rxjs';
import { UsuariosService } from '../../../services/usuarios.service';
import { FilterPipe } from '../../filtros/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-abogados',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, AsyncPipe, FilterPipe, FormsModule],
  templateUrl: './abogados.component.html',
  styleUrl: './abogados.component.css'
})
export class AbogadosComponent implements OnInit {

  filterUser = '';

  public title = 'Usuarios';
  public Usuarios!:Observable<any>;

  constructor(private userService:UsuariosService) {  }

  ngOnInit(): void {
    this.Usuarios = this.userService.getAbogados();    
  }

  showClear() {
    return this.filterUser !== '';
  }
  
  clearInput(){
    this.filterUser='';
  }

}
