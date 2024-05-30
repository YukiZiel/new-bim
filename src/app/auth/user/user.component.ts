import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loginService:LoginService, private accountsService: AccountsService) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountsService.updateStatus(this.id, status);
    // this.loginService.logStatus(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
