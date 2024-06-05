import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{

  passwordFormControl = new FormControl('', Validators.required);
  emailFormControl = new FormControl('',  [Validators.required, Validators.email]);

  upForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.upForm = new FormGroup({
      'password' : new FormControl('', [Validators.required]),
      'email' : new FormControl('',  [Validators.required, Validators.email])
    });
    // this.upForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );
  }

  onSubmit() {
    console.log(this.upForm);
  }
}
