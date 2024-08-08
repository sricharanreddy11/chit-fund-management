import { Routes } from '@angular/router';
import { routes as authRoutes } from './authenticator/authenticator.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routes as cfmRoutes } from './cfm/cfm.routes';
import { AuthenticatorComponent } from './authenticator/authenticator.component';
import { AppGuard } from './app.guard';
import { AuthGuard } from './authenticator/authenticator.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'cfm',
        pathMatch: "full"
    },
    {
        path: 'auth',
        component: AuthenticatorComponent,
        children: authRoutes,
        canActivate: [AuthGuard]
    },
    {
        path: 'cfm',
        children: cfmRoutes,
        canActivate: [AppGuard]
    },
    { 
        path: '**', 
        component: PageNotFoundComponent
    }
];
