import { Routes } from '@angular/router';
import { routes as authRoutes } from './authenticator/authenticator.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routes as cfmRoutes } from './cfm/cfm.routes';
import { AuthenticatorComponent } from './authenticator/authenticator.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: "full"
    },
    {
        path: 'auth',
        component: AuthenticatorComponent,
        children: authRoutes
    },
    {
        path: 'cfm',
        children: cfmRoutes
    },
    { 
        path: '**', 
        component: PageNotFoundComponent
    }
];
