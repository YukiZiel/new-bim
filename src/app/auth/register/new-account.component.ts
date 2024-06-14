import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
})
export class NewAccountComponent implements OnInit{

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
      // Hacer la solicitud HTTP al servidor PHP para el registro
      // this.http.post<any>('http://localhost/new-bim/php/register.php', this.registerForm.value).subscribe(
      this.http.post<any>('https://new-bim.000webhostapp.com/php/register.php', this.registerForm.value).subscribe(
        response => {
          if (response && response.success) {
            this.router.navigate(['/iniciar-sesion']); // Redirigir al componente de login
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
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
  
}
