import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthenticatorService } from '../authenticator.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(private authService: AuthenticatorService) {
    this.registerForm = new FormGroup({
      full_name: new FormControl('',[Validators.required]),
      email_mobile: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Please enter a valid details.';
      return;
    }
    console.log(this.registerForm)
}
}
