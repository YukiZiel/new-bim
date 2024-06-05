import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { AccountsService } from '../accounts.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
})
export class NewAccountComponent {

  //-----------------------------
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // constructor(private loginService:LoginService, private accountsService: AccountsService) {
  //   this.accountsService.statusUpdated.subscribe(
  //     (status: string) => alert('New Status: ' + status)
  //   );
  // }

  // onCreateAccount(accountName:string, accountPassword:string) {
    // this.accountAdded.emit ({
    //   name:accountName,
    //   status: accountStatus
    // });
    // this.loginService.logStatus('Estado:' + accountStatus);
  //   this.accountsService.addAccount(accountName,accountPassword);
  // }

  //---------------------------------------------------------
  name = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';

  constructor(private formBuilder: FormBuilder) {
    merge(this.email.statusChanges, this.email.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.ErrorMessage());
  }
  
  ErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'Introduce un correo electrónico';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Introduce un correo electrónico válido';
    } else {
      this.errorMessage = '';
    }
  }
  
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
  
  upForm!: FormGroup;

  ngOnInit() {
    this.upForm = new FormGroup({
      'username' : new FormControl('', Validators.required),
      'email' : new FormControl('',  [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    console.log(this.upForm);
  }
}
