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

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.upForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {

    if (this.upForm.valid) {
      // Hacer la solicitud HTTP al servidor PHP
      this.http.post<any>('http://new-bim.000webhostapp.com/login.php', this.upForm.value).subscribe( // Cambiar la URL por la dirección de tu servidor
        response => {
          console.log(response); // Solo imprimo el contenido de la respuesta, que es la linea de la tabla de la base de datos
        },
        error => {
          console.error(error); 
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}