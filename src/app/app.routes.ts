import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { UserComponent } from './components/pages/user/user.component';
import { HeaderComponent } from './components/partial/header/header.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { LoginComponent } from './components/pages/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:user', component: UserComponent },
    {path: 'usuarios', component:UsuariosComponent},
    {path: 'login', component:LoginComponent} 
];


