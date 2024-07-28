import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthenticatorService {
  apiUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);
  
  
  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl + 'auth/users/');
  }
}