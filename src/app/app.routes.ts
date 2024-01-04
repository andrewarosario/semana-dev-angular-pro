import { Route } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HelloWorldComponent,
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@ecommerce/products').then((c) => c.ProductsComponent),
  },
];
