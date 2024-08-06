import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticatorService } from '../authenticator.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private authService: AuthenticatorService, private router: Router) {
    this.loginForm = new FormGroup({
      email_mobile: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please enter a valid email.';
      return;
    }
    
    const email = this.loginForm.value.email_mobile;
    this.authService.sendOtp(email).subscribe(
      (requestData) => {
        console.log(requestData);
        this.router.navigate(['/auth/otp']);
        this.authService.otpRequestResponse = { 
          message: requestData.message, 
          request_id: requestData.request_id, 
          valid_for: requestData.valid_for, 
          resend_after: requestData.resend_after
        }
        this.errorMessage = '';

      },
      error => {
        console.log(error.error);
        this.errorMessage = error.error;
      }
    );
  }

  closeError(){
    this.errorMessage = ''
  }
}
