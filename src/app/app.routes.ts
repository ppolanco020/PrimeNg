import { Routes } from '@angular/router';
import { TableProductsDemo } from './table-products-demo';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'pruebas',
        pathMatch: 'full'
    },
    {
        path: 'pruebas',
        component:TableProductsDemo,
    }

];
