import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/dashboard',
        name: 'Dashboard',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/customers',
        name: 'Customers',
        iconClass: 'fas fa-users',
        layout: eLayoutType.application,
      },
      {
        path: '/invoices',
        name: 'Invoices',
        iconClass: 'fas fa-file-invoice',
        layout: eLayoutType.application,
      },
      {
        path: '/invoice',
        name: 'Invoice',
        iconClass: 'fas fa-file-medical',
        layout: eLayoutType.application,
      }

    ]);
  };
}
