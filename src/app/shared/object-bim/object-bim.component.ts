import { Component, Input } from '@angular/core';
import { ObjectBIM } from '../../object-bim';

@Component({
  selector: 'app-object-bim',
  templateUrl: './object-bim.component.html',
  styleUrl: './object-bim.component.css'
})
export class ObjectBimComponent {
  @Input() objectBim!: ObjectBIM;

  baseColor: string = 'gray';
  newColor: string = '';
  heartColor: boolean = false;
  addFavorite(){
    this.heartColor = !this.heartColor;
    this.newColor = 'red';
  }
}
