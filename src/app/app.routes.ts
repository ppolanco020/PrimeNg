import { Routes } from '@angular/router';
import { TableRowEditDemo } from './table-row-edit-demo';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'pruebas',
        pathMatch: 'full'
    },
    {
        path: 'pruebas',
        component:TableRowEditDemo,
    }

];
