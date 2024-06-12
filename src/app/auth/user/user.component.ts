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
  // @Input() account!: {name: string, status: string};
  // @Input() id!: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  userData: any;

  constructor( private authService: AuthService ) {}

  ngOnInit() {
    this.userData = this.authService.getUserData();
    // this.userService.getUserData().subscribe(userData => {
    //   this.userData = userData;
    // });
  }
  // onSetTo(status: string) {
  //   // this.statusChanged.emit({id: this.id, newStatus: status});
  //   this.accountsService.updateStatus(this.id, status);
  //   // this.loginService.logStatus(status);
  //   this.accountsService.statusUpdated.emit(status);
  // }
}
