import { Routes } from '@angular/router';
import { SidebarComponent } from '@components/dashboard/components/sidebar/sidebar.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('@components/dashboard/dashboard.component').then(module => module.DashboardComponent),
    children: [
      {
        path: '',
        component: SidebarComponent,
        outlet: 'secondary',
      },
      {
        path: 'customer',
        loadComponent: () => import('@components/customer/customer.component').then(module => module.CustomerComponent)
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },

  { path: '**',
    redirectTo: 'dashboard'
  },
];
