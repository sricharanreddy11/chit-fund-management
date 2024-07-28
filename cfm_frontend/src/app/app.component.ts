import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { AuthenticatorComponent } from "./authenticator/authenticator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, AuthenticatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crm_frontend';
}
