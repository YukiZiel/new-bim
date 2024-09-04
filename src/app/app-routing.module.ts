import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeGenericsComponent } from './pages/homeGenerics/homeGenerics.component';
import { HomeFabricantsComponent } from './pages/homeFabricants/homeFabricants.component';
import { ObjectDetailComponent } from './shared/object-detail/object-detail.component';
import { UserComponent } from './auth/user/user.component';
import { AuthGuard } from './auth/auth.guard';
import { DataGridComponent } from './pages/data-grid/data-grid.component';
import { ClassComponent } from './pages/class/class.component';
import { GridComponent } from './pages/grid/grid.component';


const routes: Routes = [
  { path: '', redirectTo:'/genericos', pathMatch:'full'},
  { path: 'genericos', component: HomeGenericsComponent},
  { path: 'fabricantes', component: HomeFabricantsComponent},
  { path: 'bim/:id', component: ObjectDetailComponent},
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'registrarse', component: RegisterComponent },
  { path: 'perfil', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'data-grid', component: DataGridComponent },
  { path: 'class', component:ClassComponent },
  { path: 'grid', component:GridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
