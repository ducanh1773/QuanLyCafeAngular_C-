import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { productItem } from '../shared/productItem';
import { NgFor } from '@angular/common';
import { ProductCreateComponent } from '../shared/component/ProductFunction/CreateProductItem/ProductCreate.component';

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

    


}
