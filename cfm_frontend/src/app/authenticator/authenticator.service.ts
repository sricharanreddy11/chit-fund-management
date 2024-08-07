import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { OtpResponse } from "./authenticator.model";
import { CookieService } from "ngx-cookie-service";


@Injectable({providedIn: 'root'})
export class AuthenticatorService {

  apiUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);
  private cookieService = inject(CookieService)
  otpRequestResponse!: OtpResponse;
  isAuthenticated: boolean = false;


registerUser(first_name: string, last_name: string, email: string): Observable<any> {
    return this.httpClient.post(this.apiUrl + 'auth/user/register/', {
        first_name: first_name,
        last_name: last_name,
        email: email
    });
}

  sendOtp(email_mobile: string) : Observable<any> {
    return this.httpClient.post(this.apiUrl + 'auth/login-otp/request-new/', {
      'email_mobile': email_mobile,
    })
  }

  verifyOtp(request_id: string, otp: string) : Observable<any> {
    return this.httpClient.post(this.apiUrl + 'auth/login-otp/verify/', {
      'request_id': request_id,
      'otp': otp
    })
  }

  private setSession(access_token: string){
    let expiresAt = new Date(new Date().getTime() + (600 * 1000));

    localStorage.setItem('expires_at', expiresAt.toISOString());
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('is_authenticated', "true")
  }

  getExpiration(): string | null {
    return localStorage.getItem('expires_at');
}

  loginUser(access_token: string, refresh_token: string) {
    this.setSession(access_token);
    this.isAuthenticated = true;
  }

  logout(){
    this.isAuthenticated = false
    localStorage.getItem('expires_at')
    localStorage.getItem('access_token')
    localStorage.setItem('is_authenticated', "false")
  }
}