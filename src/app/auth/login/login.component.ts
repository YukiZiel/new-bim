import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/login-request';
import { UserComponent } from '../user/user.component';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  // loginForm = this.formBuilder.group({
  //   email: ['ejemplo@gmail.com', [Validators.required, Validators.email]],
  //   password: ['', Validators.required]
  // })

  // constructor(private formBuilder:FormBuilder, private router: Router, private loginService: LoginService) {}



  // accounts: {name: string, status: string}[] = [];

  // constructor(private accountsService: AccountsService) {}
  @ViewChild('f') upForm!: NgForm;
  ngOnInit(){
    // this.accounts = this.accountsService.accounts;
  }



  // get email(){
  //   return this.loginForm.controls.email;
  // }
  // get password(){
  //   return this.loginForm.controls.password;
  // }
  // login(){
  //   if(this.loginForm.valid){
  //     this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
  //       next: (userData) => {
  //         console.log(userData);
  //       },
  //       error: (errorData) => {
  //         console.error(errorData);
  //       },
  //       complete: () => {
  //         console.info("Login completo");
  //       }
  //     });
  //     this.router.navigateByUrl('/inicio');
  //     this.loginForm.reset();
  //   } else {
  //     this.loginForm.markAllAsTouched();
  //   }
  // }

  // onSubmit(form:NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.upForm);
  }
}
