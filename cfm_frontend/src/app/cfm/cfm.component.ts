import { Component, OnInit } from '@angular/core';
import { CfmService } from './cfm.service';
import { AuthenticatorService } from '../authenticator/authenticator.service';
import { NavbarComponent } from "./navbar/navbar.component";
import { Router, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cfm',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, NgClass],
  templateUrl: './cfm.component.html',
  styleUrl: './cfm.component.css'
})
export class CfmComponent implements OnInit{

  constructor(
    private cfmService: CfmService,
    private authService: AuthenticatorService,
    private router: Router
  ){}

  isSidebarToggled: boolean = false;

  ngOnInit(): void {
  }

  onToggleView() {
    this.isSidebarToggled = !this.isSidebarToggled;
  }

  onLogout(){
    this.authService.logout();
    location.reload();
  }
}
