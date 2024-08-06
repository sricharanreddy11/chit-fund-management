import { Routes } from '@angular/router';
import { routes as authRoutes } from './authenticator/authenticator.routes';
import { AuthenticatorComponent } from './authenticator/authenticator.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthenticatorComponent,
        children: authRoutes
    }
];
