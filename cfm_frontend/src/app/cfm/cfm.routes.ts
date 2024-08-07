import { Routes } from '@angular/router';
import { CfmComponent } from './cfm.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: "full"
    },
    {
        path: 'dashboard',
        component: CfmComponent,
    },
];
