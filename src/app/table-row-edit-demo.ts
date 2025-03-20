import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Product } from './domain/product';
import { ProductService } from './service/product.service';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';  // Import FormsModule here

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';



//import { Customer, Representative } from '@/domain/customer';
//import { CustomerService } from '@/service/customerservice';

import { Tag } from 'primeng/tag';

import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { HttpClientModule } from '@angular/common/http';

import { MultiSelectModule } from 'primeng/multiselect';

import { DropdownModule } from 'primeng/dropdown';


import { FloatLabelModule } from 'primeng/floatlabel';




@Component({
    selector: 'table-row-edit-demo',
    templateUrl: 'table-row-edit-demo.html',
    standalone: true,
    imports: [TableModule, ToastModule, CommonModule, TagModule, SelectModule, ButtonModule, InputTextModule,FormsModule,MultiSelectModule,DropdownModule,HttpClientModule,IconFieldModule,InputIconModule,
        FloatLabelModule ],
    providers: [MessageService, ProductService,InputIcon,IconField, ]
})
export class TableRowEditDemo implements OnInit{

    products!: Product[];

    statuses!: SelectItem[];

    clonedProducts: { [s: string]: Product } = {};

    constructor(private productService: ProductService, private messageService: MessageService) {}
    

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });

        this.statuses = [
            { label: 'In Stock', value: 'INSTOCK' },
            { label: 'Low Stock', value: 'LOWSTOCK' },
            { label: 'Out of Stock', value: 'OUTOFSTOCK' }
        ];
    }

    onRowEditInit(product: Product) {
        this.clonedProducts[product.id as string] = { ...product };
    }

    onRowEditSave(product: Product) {
        const price = product.price ?? 0;  // Default to 0 if price is undefined or null
        if (price > 0) {
            delete this.clonedProducts[product.id as string];
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
        } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
        }
    }

    onRowEditCancel(product: Product, index: number) {
        this.products[index] = this.clonedProducts[product.id as string];
        delete this.clonedProducts[product.id as string];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
        }
        return 'danger';  // Return a default value if no case matches
    }
}