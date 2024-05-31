import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavComponent } from './shared/nav/nav.component';
import { ObjectBimComponent } from './shared/object-bim/object-bim.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './auth/user/user.component';
import { NewAccountComponent } from './auth/new-account/new-account.component';
import { AccountsService } from './auth/accounts.service';
import { LoginService } from './auth/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    NavComponent,
    ObjectBimComponent,
    UserComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonToggleModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync(), 
    AccountsService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
