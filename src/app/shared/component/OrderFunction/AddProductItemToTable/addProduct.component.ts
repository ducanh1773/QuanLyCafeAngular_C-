import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { productItem } from '../../../productItem';
import { productOrdertItemComponent } from '../ProductOrderItem/productOrder.component';


@Component({
    selector: 'product-item-component-layout',
    imports: [
        RouterLink,

        NgFor,
        productOrdertItemComponent,

    ],
    templateUrl: './addProduct.component.html',
    styleUrl: './addProduct.component.css',
    standalone: true,

})
export class AddProductComponent {
    products: productItem[] = [
    
        {
            id: 2,
            name: "Cafe đen",
            detail: "cafe đen",
            price: 100000,
            category: "cafe",
            deleted: false,
            imageProduct: "assets/image/anhsanpham2.jpg",
            status: "false",

        },
        {
            id: 2,
            name: "Cafe đen",
            detail: "cafe đen",
            price: 100000,
            category: "cafe",
            deleted: false,
            imageProduct: "assets/image/anhsanpham2.jpg",
            status: "true"
        },
        {
            id: 2,
            name: "Cafe đen",
            detail: "cafe đen",
            price: 100000,
            category: "cafe",
            deleted: false,
            imageProduct: "assets/image/anhsanpham2.jpg",
            status: "true"
        },
        {
            id: 2,
            name: "Cafe đen",
            detail: "cafe đen",
            price: 100000,
            category: "cafe",
            deleted: false,
            imageProduct: "assets/image/anhsanpham2.jpg",
            status: "true"
        },
    ];



}
