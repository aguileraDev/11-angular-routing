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
        path: 'home',
        loadComponent: () => import('@components/home/home.component').then(module => module.HomeComponent)
      },
      {
        path: 'customer',
        loadComponent: () => import('@components/customer/customer.component').then(module => module.CustomerComponent)
      },
      {
        path: 'dishes',
        loadComponent: () => import('@components/dishes/dishes.component').then(module => module.DishesComponent)
      },
      {
        path: 'menu',
        loadComponent: () => import('@components/menu/menu.component').then(module => module.MenuComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('@components/orders/orders.component').then(module => module.OrdersComponent)
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
