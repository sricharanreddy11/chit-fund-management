import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { OtpResponse } from "./authenticator.model";

@Injectable({providedIn: 'root'})
export class AuthenticatorService {

  apiUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);
  otpRequestResponse!: OtpResponse;
  accesstoken!: string;
  refreshtoken!: string;
  isAuthenticated: boolean = false;

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
}