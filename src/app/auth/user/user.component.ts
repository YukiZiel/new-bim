import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ObjectBIM } from '../../interfaces/object-bim';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit{
  @Input() objectBim!: ObjectBIM;

  userData: any;
  
  favoriteObjects: ObjectBIM[] = []; // Aquí almacenaremos los objetos BIM favoritos


  constructor( private authService: AuthService, private userService:UserService, private router: Router ) {}

  ngOnInit(): void {

    this.userData = this.authService.getUserData();

    // Llamar al servicio para obtener los favoritos del usuario
    this.userService.getFavoriteObjects(this.userData.id_user)
      .subscribe((favorites: ObjectBIM[]) => {
        this.favoriteObjects = favorites;
        console.log(favorites);
      });
  }

  navigateToDetail(id:string): void {
    const currentRoute = this.router.url; // Obtener la ruta actual
    this.router.navigate(['/bim', id], { queryParams: { from: currentRoute } }) // Pasar la ruta actual como parámetro de consulta
  }
}
