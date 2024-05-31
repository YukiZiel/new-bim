import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  upForm!: FormGroup;
  ngOnInit() {
    this.upForm = new FormGroup({
      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null,  [Validators.required, Validators.email])
    });
  }
  onSubmit() {
    console.log(this.upForm);
  }
}
