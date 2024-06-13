import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent implements OnInit {
  passwordFormControl = new FormControl('', Validators.required);
  emailFormControl = new FormControl('',  [Validators.required, Validators.email]);
  upForm!: FormGroup;
  errorMessage: string | undefined;

  constructor( private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService , private userService:UserService ) {}

  ngOnInit() {
    this.upForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.upForm.valid) {
      // Hacer la solicitud HTTP al servidor PHP
      // this.http.post<any>('https://new-bim.000webhostapp.com/php/login.php', this.upForm.value).subscribe(
      this.http.post<any>('http://localhost/new-bim/php/login.php', this.upForm.value).subscribe(
        response => {
          if (response.success === false) { 
            this.errorMessage = 'Correo electrónico o contraseña incorrecta';
          } else {
            // this.userService.setUserData(response); // Guardar los datos del usuario
            this.authService.login(response);  // Guardar los datos del usuario en el AuthService
            // this.userService.saveFav(response); 
            this.router.navigate(['/perfil']); // Redirigir al componente de perfil
          }
        },
        error => {
          this.errorMessage = error; 
          console.error(error); 
        }
      );
    } else {
      this.errorMessage = 'Formulario inválido';
    }
  }
}