import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

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

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    // merge(this.email.statusChanges, this.email.valueChanges)
    // .pipe(takeUntilDestroyed())
    // .subscribe(() => this.ErrorMessage());
  }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      lastname: ['', Validators.required],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.registerForm.valid) {
      // Hacer la solicitud HTTP al servidor PHP para el registro
      this.http.post<any>('http://localhost/new-bim/php/register.php', this.registerForm.value).subscribe(
        // this.http.post<any>('https://new-bim.000webhostapp.com/register.php', this.registerForm.value).subscribe(
        response => {
          console.log(response); // Maneja la respuesta del servidor aquí
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }


  // errorMessage = '';
  
  // ErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     this.errorMessage = 'Introduce un correo electrónico';
  //   } else if (this.email.hasError('email')) {
  //     this.errorMessage = 'Introduce un correo electrónico válido';
  //   } else {
  //     this.errorMessage = '';
  //   }
  // }
  
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
  
}
