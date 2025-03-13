import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { productItem } from '../shared/productItem';
import { productItemComponent } from '../product-item/productItem.component';
import { ProductCreateComponent } from '../shared/component/ProductFunction/CreateProductItem/ProductCreate.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/ProductService';
import { response } from 'express';
import { error } from 'console';
@Component({
    selector: 'products-list-component-layout',
    imports: [
        RouterLink,
        LoginComponent,
        productItemComponent,
        ProductCreateComponent,
        HttpClientModule,

    ],
    providers: [HttpClient],
    templateUrl: './ProductManage.component.html',
    styleUrl: './ProductManage.component.css',
    standalone: true,

})
export class ProductManageComponent implements OnInit {

    getProductApi: Subscription = new Subscription();
    products: productItem[] = [];

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        const token = localStorage.getItem('token');
        this.getProductApi = this.productService
            .getProduct()
            .subscribe((response: productItem[]) => {
                this.products = response.map(item => ({
                    id: item.id,
                    name: item.name,
                    detail: item.detail,
                    price: item.price,
                    Category_Name: item.Category_Name,
                    deleted: item.deleted,
                    imageProduct: item.imageProduct,
                    status: item.status

                }))
                console.log(this.products)

            },
                (error) => {
                    console.error("Lỗi khi lấy danh sách sản phẩm")
                }

            )
    }

}
