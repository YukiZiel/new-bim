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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { NgArrayPipesModule } from 'ngx-pipes';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './auth/login/login.component';
import { HomeGenericsComponent } from './pages/homeGenerics/homeGenerics.component';
import { HomeFabricantsComponent } from './pages/homeFabricants/homeFabricants.component';
import { ObjectsBimComponent } from './shared/objects-bim/objects-bim.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './auth/user/user.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddFavService } from './services/add-fav.service';
import { ObjectDetailComponent } from './shared/object-detail/object-detail.component';
import { DataGridComponent } from './pages/data-grid/data-grid.component';
import { ClassComponent } from './pages/class/class.component';
import { ResizableComponent } from "./shared/resizable/resizable.component";
import { ImgCellComponent } from './pages/img-cell/img-cell.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeGenericsComponent,
    ObjectsBimComponent,
    UserComponent,
    RegisterComponent,
    HomeFabricantsComponent,
    ObjectDetailComponent,
    DataGridComponent,
    ClassComponent,    
    ResizableComponent, ImgCellComponent
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
    MatInput,
    NgArrayPipesModule,
    FormsModule,
    AgGridModule,
    CommonModule
],
  providers: [
    provideAnimationsAsync(), 
    AddFavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
