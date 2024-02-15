import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { UserComponent } from './components/pages/user/user.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:user', component: UserComponent },
];
