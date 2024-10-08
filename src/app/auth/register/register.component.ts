import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit{

  username = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  company = new FormControl('');
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  registerForm!: FormGroup;
  errorMessage: string | undefined;
  successMessage: string | undefined;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      lastname: ['', Validators.required],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }
  
  onSubmit() {
    if (this.registerForm.valid) {
      // Hacer la solicitud HTTP al servidor PHP para el registro https://new-bim.000webhostapp.com/php/register.php
      // Para trabajar en local se tiene que cambiar la ruta, en mi caso es http://localhost/new-bim/php/register.php
      this.http.post<any>('http://localhost/new-bim/php/register.php', this.registerForm.value).subscribe(
        response => {
          if (response && response.success) {
            this.router.navigate(['/iniciar-sesion']); 
            this.successMessage = 'Se ha creado el usuario correctamente!';
          } else {
            this.errorMessage = 'No se ha podido crear el usuario';
          }
        },
        error => {
          this.errorMessage = 'Error de registro:' + error.statusText; 
        }
      );
    } else {
      this.errorMessage = 'Formulario inválido';
    }
  }


  
  hide = true; 
  // Es para visualizar u ocultar el campo de la contraseña
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
  
}
