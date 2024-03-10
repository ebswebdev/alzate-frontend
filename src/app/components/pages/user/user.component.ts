import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../partial/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuariosService } from '../../../services/usuarios.service';
import { Observable, first, map } from 'rxjs';
import { User } from '../../shared/models/User';
import { IAddRadicado, Radicado } from '../../shared/models/Radicado';
import { RadicadosService } from '../../../services/radicados.service';
import { FooterComponent } from '../../partial/footer/footer.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IAddProcesoR, ProcesoR } from '../../shared/models/ProcesoR';
import { ProcesosrService } from '../../../services/procesosr.service';
import { ProcesosrPipe } from '../../filtros/procesos/procesosr.pipe';
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
    ReactiveFormsModule,
    ProcesosrPipe,
    AsyncPipe,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  addRadicadoForm: FormGroup = new FormGroup({});
  addProcesoRForm: FormGroup = new FormGroup({});
  addRadicadoIsSubmitted = false;
  returnUrl = '';

  public Usuario!: Observable<User>;
  public cedula: string = '';

  public Radicados$!: Observable<Radicado[]>;

  public ProcesosR$!: Observable<ProcesoR[]>;

  public fechaDefault = '';
  public radicadoSeleccionado?: Radicado;

  constructor(
    private userService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router,
    private radicadosService: RadicadosService,
    private formBuilder: FormBuilder,
    private procesoRService: ProcesosrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cedula = params['user'];
    });

    //this.ProcesosR$ = this.procesoRService.getProcesosR();
    this.addRadicadoForm = this.formBuilder.group({
      numero: ['', [Validators.required]],
      estado: ['activo', [Validators.required]],
      demanda: ['', [Validators.required]],
      demandado: ['', [Validators.required]],
      usuario: [this.cedula, [Validators.required]],
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

      return;
    }

    const fv = this.addRadicadoForm.value;
    const radicado: IAddRadicado = {
      numero: fv.numero,
      estado: fv.estado,
      demanda: fv.demanda,
      demandado: fv.demandado,
      usuario: fv.usuario,
    };

    this.returnUrl = '/usuario/' + this.cedula;

    this.radicadosService.addRadicado(radicado).subscribe((_) => {
      this.closeModal('addRadicadoModal');
      setTimeout(()=>{
        location.reload();
      },1000);
    });
  }

  showModal(id: string) {
    // Get the modal
    var modal = document.getElementById(id);
    if (modal) {
      modal.style.display = 'block';
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        if (modal) modal.style.display = 'none';
      }
    };
  }
  closeModal(id: string) {
    var modal = document.getElementById(id);
    if (modal) {
      modal.style.display = 'none';
    }
  }

  getProcesoR(rad: string) {
    this.ProcesosR$ = this.procesoRService.getProcesosRByRadicado(rad);
  }
  getProces(rad: string) {
    document.getElementById(rad)?.classList.toggle('activo');
  }

  getCurrentDate(): string {
    const now = new Date();
    // Establece la zona horaria a Colombia (GMT-5)
    const options = { timeZone: 'America/Bogota' };
    // Formatea la fecha y hora en la zona horaria de Colombia
    const formattedDateTime = now.toLocaleString('es-CO', options);
    return formattedDateTime;
  }
  addProceso(modal: string, rad: Radicado) {
    this.radicadoSeleccionado = rad;
    this.fechaDefault = this.getCurrentDate();
    this.addProcesoRForm = this.formBuilder.group({
      fecha: [this.fechaDefault, [Validators.required]],
      observaciones: ['', [Validators.required]],
      radicado: [this.radicadoSeleccionado.numero, [Validators.required]],
    });
    this.showModal(modal);
  }

  addProcesoSubmit() {
    if (this.addProcesoRForm.invalid) {
      console.log(this.addProcesoRForm.value);
      return;
    }
    const fv = this.addProcesoRForm.value;
    const procesor: IAddProcesoR = {
      fecha: fv.fecha,
      observaciones: fv.observaciones,
      radicado: fv.radicado,
    };

    this.returnUrl = '/usuario/' + this.cedula;

    this.procesoRService.addProcesor(procesor).subscribe((_) => {
      this.closeModal('addProcesoModal');
      
    });
  }
}
