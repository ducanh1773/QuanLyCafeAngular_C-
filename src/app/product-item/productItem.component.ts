import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { productItem } from '../shared/productItem';
import { NgFor } from '@angular/common';
import { ProductCreateComponent } from '../shared/component/ProductFunction/CreateProductItem/ProductCreate.component';
import { ProductService } from '../../services/ProductService';


@Component({
    selector: 'product-item-component-layout',
    imports: [
        RouterLink,
        LoginComponent,
        NgFor,
        ProductCreateComponent,

    ],
    templateUrl: './productItem.component.html',
    styleUrl: './productItem.component.css',
    standalone: true,

})
export class productItemComponent {
    @Input() products: productItem[] = [];
    @Output() dataEvent = new EventEmitter<number>();

    constructor(private productService: ProductService) {
    }

    handleDeleteAccount = (id: number) => {
        this.productService.deleteProduct(id).subscribe((data: any) => {
            console.log(id);
            console.log(data);
            console.log(typeof (data))
            if (data == id) {
                this.products = this.products.filter(item => item.id !== id)
                window.location.reload();
            }
        })
    }

}
