import { Routes } from '@angular/router';
import { CfmComponent } from './cfm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChitsComponent } from './chits/chits.component';
import { GroupsComponent } from './groups/groups.component';
import { SchemesComponent } from './schemes/schemes.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: "full"
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'chits',
        component: ChitsComponent,
    },
    {
        path: 'groups',
        component: GroupsComponent,
    },
    {
        path: 'schemes',
        component: SchemesComponent,
    }
];
