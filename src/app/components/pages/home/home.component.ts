import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, RouterLink, UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public title = 'Home Page';
  httpClient = inject(HttpClient);
  Usuarios: any[] = [];
  Abogados: any[] = [];

  ngOnInit(): void {
    this.getAbogados();
    this.getUsuarios();
  }

  getUsuarios() {
    this.httpClient
      .get('http://localhost:4200/assets/dataUsuarios.json')
      .subscribe((data: any) => {
        console.log('Got data', data);
        this.Usuarios = data;
      });
  }
  getAbogados() {
    this.httpClient
      .get('http://localhost:4200/assets/dataAbogados.json')
      .subscribe((data: any) => {
        console.log('Got data', data);
        this.Abogados = data;
      });
  }
}
