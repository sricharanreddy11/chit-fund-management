import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JwtService {
  decodeToken(token: string): any {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  getTokenExpirationDate(token: string): Date | null {
    const decoded = this.decodeToken(token);
    if (decoded.exp === undefined) return null;
    return new Date(decoded.exp * 1000);
  }

  isTokenExpired(token: string): boolean {
    const expirationDate = this.getTokenExpirationDate(token);
    return expirationDate ? expirationDate < new Date() : true;
  }
}
