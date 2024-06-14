import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ObjectBIM } from '../../interfaces/object-bim';
import { AddFavService } from '../../services/add-fav.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-object-bim',
  templateUrl: './objects-bim.component.html',
  styleUrl: './objects-bim.component.css'
})
export class ObjectsBimComponent implements OnInit{
  @Input() objectBim!: ObjectBIM;
  @Input() idfavs: any;
  isDisabled = false;
  userData: any;

  constructor(private router: Router, private addFavService: AddFavService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userData = this.authService.getUserData();
    this.isDisabled = this.userData === null;
  }

  navigateToDetail(id:string): void {
    const currentRoute = this.router.url; // Obtener la ruta actual
    this.router.navigate(['/bim', id], { queryParams: { from: currentRoute } }) // Pasar la ruta actual como parámetro de consulta
  }

  toggleFavList(objectBim:ObjectBIM) {
    const userid = this.userData?.id_user; // Obtener el userid del usuario en sesión
    const objectid = objectBim.id; 
    
    this.addFavService.toggleFavorite(userid, objectid).subscribe(
      response => {
        //this.isFavorite = true;
        console.log(response); 
      },
      error => {
        console.error('Error al agregar favorito:', error);
      }
    );
  }

  // isFavorite(){
  //   debugger;
  //   for (let i = 0; i < this.idfavs.length; i++) {
  //     if (this.objectBim.id === this.idfavs[i].id){
  //       return true;
  //     }
  //   }
  //   return false;
  // }

}
