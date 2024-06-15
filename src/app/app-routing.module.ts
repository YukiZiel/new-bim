import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NewAccountComponent } from './auth/register/new-account.component';
import { HomeGenericsComponent } from './pages/homeGenerics/homeGenerics.component';
import { HomeFabricantsComponent } from './pages/homeFabricants/homeFabricants.component';
import { ObjectDetailComponent } from './shared/object-detail/object-detail.component';
import { UserComponent } from './auth/user/user.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo:'/genericos', pathMatch:'full'},
  { path: 'genericos', component: HomeGenericsComponent},
  { path: 'fabricantes', component: HomeFabricantsComponent},
  { path: 'bim/:id', component: ObjectDetailComponent}, // cambiar bim por obtener /genericos o /fabricantes
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'registrarse', component: NewAccountComponent },
  { path: 'perfil', component: UserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
