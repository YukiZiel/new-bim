import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NewAccountComponent } from './auth/register/new-account.component';
import { DashboardGComponent } from './pages/dashboardGenerics/dashboardG.component';
import { DashboardFComponent } from './pages/dashboardFabricants/dashboardF.component';
import { ObjectDetailComponent } from './shared/object-detail/object-detail.component';


const routes: Routes = [
  { path: '', redirectTo:'/inicio', pathMatch:'full'},
  { path: 'inicio', component: DashboardGComponent},
  { path: 'fabricantes', component: DashboardFComponent},
  { path: 'bim/:id', component: ObjectDetailComponent},
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'registrarse', component: NewAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
