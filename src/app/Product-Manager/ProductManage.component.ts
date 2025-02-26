import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { productItem } from '../shared/productItem';
import { productItemComponent } from '../product-item/productItem.component';
import { ProductCreateComponent } from '../shared/component/ProductFunction/CreateProductItem/ProductCreate.component';
@Component({
    selector: 'products-list-component-layout',
    imports: [
        RouterLink,
        LoginComponent,
        productItemComponent,
        ProductCreateComponent,
    ],
    templateUrl: './ProductManage.component.html',
    styleUrl: './ProductManage.component.css',
    standalone: true,

})
export class ProductManageComponent {
    products: productItem[] = [
        {
            id: 1,
            name: "Cafe đen",
            detail: "cafe đen",
            price: 100000,
            category: "cafe",
            deleted: false,
            imageProduct: "assets/image/anhsanpham2.jpg",
            status : true
        },
        {
            id: 2,
            name: "Cafe đen",
            detail: "cafe đen",
            price: 100000,
            category: "cafe",
            deleted: false,
            imageProduct: "assets/image/anhsanpham2.jpg",
            status : true
        },
        {
            id: 3,
            name: "Cafe đen",
            detail: "cafe đen",
            price: 100000,
            category: "cafe",
            deleted: false,
            imageProduct: "assets/image/anhsanpham2.jpg",
            status : true
        },
        {
            id: 4,
            name: "Cafe đen",
            detail: "cafe đen",
            price: 100000,
            category: "cafe",
            deleted: false,
            imageProduct: "assets/image/anhsanpham2.jpg",
            status : true
        },
    ];

}
