import { Routes } from '@angular/router';
import { TableCustomersDemo } from './table-customers-demo';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'pruebas',
        pathMatch: 'full'
    },
    {
        path: 'pruebas',
        component:TableCustomersDemo,
    }

];
