import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterLink, RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../../services/ProductService';
import { productItem, productItemAdd } from '../../../productItem';

@Component({
    selector: 'product-update-component-layout',
    imports: [
        RouterLink,

        ReactiveFormsModule,
        NgIf,


    ],
    templateUrl: './ProductUpdate.component.html',
    styleUrl: './ProductUpdate.component.css',
    standalone: true,

})
export class ProductUpdateComponent {
    productUpdate = new FormGroup({
        name: new FormControl('', Validators.required),
        detail: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required)
    })
    id = 0;
    constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
        this.id = Number(route.snapshot.paramMap.get('id'));
    }


    selectedFileName: string | null = null;

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedFileName = input.files[0].name; // Lưu tên file
        }
    }

    get Name() {
        return this.productUpdate.get('name')
    }

    get Detail() {
        return this.productUpdate.get('detail')
    }

    get Price() {
        return this.productUpdate.get('price')

    }

    get Category() {
        return this.productUpdate.get('category')
    }

    get Image() {
        return this.productUpdate.get('image')
    }
    get Status() {
        return this.productUpdate.get('status')
    }


    handleUpdateProduct() {
        if (this.Name?.hasError('required') || this.Detail?.hasError('required') || this.Price?.hasError('required') || this.Category?.hasError('required') || this.Image?.hasError('required') || this.Status?.hasError('required')) {
            return;
        } else {
            const productItemAdd: productItem = {
                id: this.id,
                name: String(this.Name?.value),
                detail: String(this.Detail?.value),
                price: Number(this.Price?.value),
                Category_Name: String(this.Category?.value),
                imageProduct: String(this.selectedFileName),
                status: this.Status?.value === 'true' ? true : false,
                deleted: false,
            }
            this.productService.updateProduct(this.id, productItemAdd).subscribe({
                next: (response) => {
                    console.log('Cập nhật sản phẩm thành công', response);
                    alert('Cập nhật sản phẩm thành công');
                    setTimeout(() => {
                        this.router.navigate(['/ProductManage']);
                    }, 2000)

                },
                error: (err) => {
                    console.error('Lỗi không thể cập nhật sản phẩm:', err);
                }
            });
        }
    }

}
