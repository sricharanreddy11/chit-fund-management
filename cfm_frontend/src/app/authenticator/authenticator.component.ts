import { Component, inject } from '@angular/core';
import { AuthenticatorService } from './authenticator.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-authenticator',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './authenticator.component.html',
  styleUrl: './authenticator.component.css'
})
export class AuthenticatorComponent {
  private authService = inject(AuthenticatorService);
  users: any[] = [];


  onGetUsers() {
    this.authService.getUsers().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}
