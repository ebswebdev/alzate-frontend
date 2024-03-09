import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../partial/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuariosService } from '../../../services/usuarios.service';
import { Observable, first } from 'rxjs';
import { User } from '../../shared/models/User';
import { IAddRadicado, Radicado } from '../../shared/models/Radicado';
import { RadicadosService } from '../../../services/radicados.service';
import { FooterComponent } from '../../partial/footer/footer.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HttpClientModule,
    FooterComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {

  addRadicadoForm!: FormGroup;
  addRadicadoIsSubmitted = false;
  returnUrl = '';

  public Usuario!: Observable<User>;
  public cedula: string = '';

  public Radicados$!: Observable<Radicado[]>;

  constructor(
    private userService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router,
    private radicadosService: RadicadosService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.addRadicadoForm = new FormGroup({
      numero: new FormControl(['', [Validators.required]]),
      estado: new FormControl(['activo', [Validators.required]]),
      demanda: new FormControl(['', [Validators.required]]),
      demandado: new FormControl(['', [Validators.required]]),
      usuario: new FormControl([this.cedula, [Validators.required]]),
    });


    this.route.params.subscribe((params) => {
      this.cedula = params['user'];
    });

    this.Usuario = this.userService.getUsuarioId(this.cedula);
    this.Radicados$ = this.radicadosService.getRadicadosByUser(this.cedula);

    
  }

  get fc() {
    return this.addRadicadoForm.controls;
  }
  submit() {
    this.addRadicadoIsSubmitted = true;
    
    if (this.addRadicadoForm.invalid) {
      console.log(this.addRadicadoForm.value);
      
      return};

    const fv = this.addRadicadoForm.value;
    const radicado: IAddRadicado = {
      numero: fv.numero,
      estado: fv.estado,
      demanda: fv.demanda,
      demandado: fv.demandado,
      usuario: fv.usuario,
    };

    this.returnUrl = '/usuario/'+this.cedula;
    
    this.radicadosService.addRadicado(radicado).subscribe((_) => {
      console.log("hola en server");
      this.closeModal('addRadicadoModal');
      
      this.router.navigateByUrl(this.returnUrl);
      console.log("despues de recargar");
    });
  }



  showModal(id:string) {
    // Get the modal
    var modal = document.getElementById(id) ;
        if(modal){
          modal.style.display = 'block';
        }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        if (modal) modal.style.display = 'none';
      }
    };
  }
  closeModal(id:string){
    var modal = document.getElementById(id) ;
        if(modal){
          modal.style.display = 'none';
        }
  }
}
