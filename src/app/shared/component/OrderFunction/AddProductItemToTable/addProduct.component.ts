import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { productItem } from '../../../productItem';
import { productOrdertItemComponent } from '../ProductOrderItem/productOrder.component';
import { ProductService } from '../../../../../services/ProductService';
import { Subscription } from 'rxjs';


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
export class AddProductComponent implements OnInit {
    @Output() dataEvent = new EventEmitter<number>();

    products: productItem[] = [];
    getProductApi: Subscription = new Subscription();
    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
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

            },
                (error) => {
                    console.error("Lỗi khi lấy danh sách sản phẩm")
                }

            )
    }
    handleDataEvent(event: { productId: number; quantity: number; stock: { id: number; quantity: number }[] }) {
        console.log('Dữ liệu nhận được:', event);
        // Xử lý dữ liệu ở đây
    }



}
