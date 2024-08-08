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
  otpSent: boolean = false;
  private cookiePath = '/';

  isLoggedIn(): boolean {
    return this.cookieService.get('is_authenticated') === 'true';
  }


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
    const expiresAt = new Date(new Date().getTime() + (600 * 1000)).toISOString();
      const cookieOptions = { path: this.cookiePath };
      
      this.cookieService.set('expires_at', expiresAt, cookieOptions);
      this.cookieService.set('access_token', access_token, cookieOptions);
      this.cookieService.set('is_authenticated', 'true', cookieOptions);
  }

  getExpiration(): string | null {
    return localStorage.getItem('expires_at');
}

  loginUser(access_token: string, refresh_token: string) {
    this.setSession(access_token);
  }

  logout(){      
      this.cookieService.deleteAll(this.cookiePath);
      console.log('After logout:', this.cookieService.getAll());
  }
  }
  