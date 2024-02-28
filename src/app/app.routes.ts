import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/partial/header/header.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AbogadosComponent } from './components/pages/abogados/abogados.component';
import { CalculosComponent } from './components/pages/calculos/calculos.component';
import { UserComponent } from './components/pages/user/user.component';

export const routes: Routes = [
    { path: '', redirectTo: 'calculos', pathMatch: 'full' },
    { path: 'calculos', component: CalculosComponent },
    { path: 'usuario/:user', component: UserComponent },
    {path: 'usuarios', component:UsuariosComponent},
    {path: 'login', component:LoginComponent},
    {path: 'agregar-usuario', component:RegisterComponent},
    {path: 'abogados',component:AbogadosComponent}
];


