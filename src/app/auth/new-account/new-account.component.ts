import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../login.service';
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
})
export class NewAccountComponent {

  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loginService:LoginService, private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName:string, accountStatus:string) {
    // this.accountAdded.emit ({
    //   name:accountName,
    //   status: accountStatus
    // });
    this.accountsService.addAccount(accountName,accountStatus);
    // this.loginService.logStatus('Estado:' + accountStatus);
  }
}
