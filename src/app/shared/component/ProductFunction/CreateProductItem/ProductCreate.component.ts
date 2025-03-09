import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';
import { ProductService } from '../../../../../services/ProductService';
import { productItemAdd } from '../../../productItem';
import { error } from 'console';
@Component({
    selector: 'product-create-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,




    ],
    templateUrl: './ProductCreate.component.html',
    styleUrl: './ProductCreate.component.css',
    standalone: true,

})
export class ProductCreateComponent {
    product = new FormGroup({
        name: new FormControl('', Validators.required),
        detail: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required)
    })

    constructor(private productService: ProductService, private router: Router) {

    }

    get Name() {
        return this.product.get('name')
    }

    get Detail() {
        return this.product.get('detail')
    }

    get Price() {
        return this.product.get('price')

    }

    get Category() {
        return this.product.get('category')
    }

    get Image() {
        return this.product.get('image')
    }
    get Status() {
        return this.product.get('status')
    }

    handleCreateProduct() {
        if (this.Name?.hasError('required') || this.Detail?.hasError('required') || this.Price?.hasError('required') || this.Category?.hasError('required') || this.Image?.hasError('required') || this.Status?.hasError('required')) {
            return;
        } else {
            const productItemAdd: productItemAdd = {
                name: String(this.Name?.value),
                detail: String(this.Detail?.value),
                price: Number(this.Price?.value),
                category_Name: String(this.Category?.value),
                imageProduct: String(this.Image?.value),
                status: this.Status?.value === 'true',
                deleted: false,
                


            }

            console.log(productItemAdd.category_Name);

            this.productService.addProduct(productItemAdd).subscribe(
                response => {
                    // Xử lý phản hồi sau khi thêm sản phẩm
                    console.log("Đã thêm mới sản phẩm", response);
                    alert("Tạo sản phẩm mới thành công");
                    setTimeout(() => {
                        this.router.navigate(['/products-manage']); // Chuyển hướng đến trang danh sách sản phẩm
                    }, 2000)
                },
                error => {
                    alert("Có lỗi khi thêm mới sản phẩm ")
                });
        }
    }

}
