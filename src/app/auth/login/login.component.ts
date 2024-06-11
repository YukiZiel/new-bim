import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../../services/auth/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  passwordFormControl = new FormControl('', Validators.required);
  emailFormControl = new FormControl('',  [Validators.required, Validators.email]);
  upForm!: FormGroup;
  errorMessage: string = '';
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService:LoginService) {}

  ngOnInit() {
    this.upForm = new FormGroup({
      'password' : new FormControl('', [Validators.required]),
      'email' : new FormControl('',  [Validators.required, Validators.email])
    // this.upForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required]]
    });
  }

  onSubmit() {

    console.log(this.upForm);
  //   if (this.upForm.valid) {
  //     const { email, password } = this.upForm.value;
  //     this.loginService.login(email, password).subscribe(
  //       response => {
  //         console.log(response);
  //         this.router.navigate(['/inicio']);
  //       },
  //       error => {
  //         console.error(error);
  //         this.errorMessage = 'Usuario o contraseña incorrectos';
  //       }
  //     );
  //   } else {
  //     console.log('Formulario inválido');
  //   }
  }
}