import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../partial/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuariosService } from '../../../services/usuarios.service';
import { Observable, first } from 'rxjs';
import { User } from '../../shared/models/User';
import { Radicado } from '../../shared/models/Radicado';
import { RadicadosService } from '../../../services/radicados.service';
import { FooterComponent } from '../../partial/footer/footer.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HttpClientModule,
    FooterComponent,
    RouterLink,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  public Usuario!: Observable<User>;
  public cedula: string = '';

  public Radicados$!: Observable<Radicado[]>;

  public radicado!: Radicado;

  constructor(
    private userService: UsuariosService,
    private route: ActivatedRoute,
    private radicadosService: RadicadosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cedula = params['user'];
    });

    this.Usuario = this.userService.getUsuarioId(this.cedula);
    this.Radicados$ = this.radicadosService.getRadicadosByUser(this.cedula);
    this.Radicados$.subscribe(
      (radicado) => {
        this.radicado = radicado[0];
      },
      (error) => {
        // Maneja cualquier error que ocurra durante la suscripción al observable
        console.error('Error al obtener el primer radicado:', error);
      }
    );
  }

  getRadicado(radicado: string) {
    this.Radicados$.subscribe((radicados) => {
      this.radicado = radicados.filter((r) => r.numero === radicado)[0];
    });
  }

  agregarRadicado() {
    // Get the modal
    var modal = document.getElementById('myModal') ;
    
        if(modal){
          console.log("modal", modal);
          modal.style.display = 'block';
        }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        if (modal) modal.style.display = 'none';
      }
    };
  }
}
