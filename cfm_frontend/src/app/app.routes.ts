import { Routes } from '@angular/router';
import { AuthenticatorComponent } from './authenticator/authenticator.component';
import { LoginComponent } from './authenticator/login/login.component';
import { OtpComponent } from './authenticator/otp/otp.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthenticatorComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'otp',
                component: OtpComponent
            }
        ]
    }
];
