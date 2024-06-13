import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor( private authService: AuthService ) {}

  ngOnInit() {
    this.userData = this.authService.getUserData();
  }

}
