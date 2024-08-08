import { Component, OnInit } from '@angular/core';
import { CfmService } from './cfm.service';
import { AuthenticatorService } from '../authenticator/authenticator.service';

@Component({
  selector: 'app-cfm',
  standalone: true,
  imports: [],
  templateUrl: './cfm.component.html',
  styleUrl: './cfm.component.css'
})
export class CfmComponent implements OnInit{

  constructor(
    private cfmService: CfmService,
    private authService: AuthenticatorService
  ){}

  ngOnInit(): void {
    this.cfmService.getGroups().subscribe(
      resData => console.log(resData)
      );
  }

  onLogout(){
    this.authService.logout()
  }
}
