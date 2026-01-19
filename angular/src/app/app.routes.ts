import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'customers',
    component: CustomerListComponent
  },
  {
    path: 'invoices',
    component: InvoiceListComponent
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  // {
  //   path: 'account',
  //   loadChildren: () => import('@abp/ng.account').then(m => m.createRoutes()),
  // },
  // {
  //   path: 'identity',
  //   loadChildren: () => import('@abp/ng.identity').then(m => m.createRoutes()),
  // },
  // {
  //   path: 'tenant-management',
  //   loadChildren: () =>
  //     import('@abp/ng.tenant-management').then(m => m.createRoutes()),
  // },
  // {
  //   path: 'setting-management',
  //   loadChildren: () =>
  //     import('@abp/ng.setting-management').then(m => m.createRoutes()),
  // },
];
