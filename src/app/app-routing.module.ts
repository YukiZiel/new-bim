import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NavComponent } from './shared/nav/nav.component';


const routes: Routes = [
  { path: '', redirectTo:'/inicio', pathMatch:'full'},
  { path: 'inicio', component: NavComponent},
  { path: 'iniciar-sesion', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
