import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterLink, RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../../../../../services/StockService';
import { StockAdd } from '../../../stockItem';

@Component({
    selector: 'account-update-component-layout',
    imports: [
        RouterLink,

        ReactiveFormsModule,
        NgIf,


    ],
    templateUrl: 'StockUpdate.component.html',
    styleUrl: 'StockUpdate.component.css',
    standalone: true,

})
export class StockUpdateComponent {
    stock = new FormGroup({
        name: new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
        UnitOfMeasure: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        deleted: new FormControl('', Validators.required)

    })
    id = 0;
    constructor(private route: ActivatedRoute, private stockService: StockService, private router: Router) {
        this.id = Number(route.snapshot.paramMap.get('id'));
    }

    get Name() {
        return this.stock.get("name")
    }

    get Quantity() {
        return this.stock.get("quantity")
    }

    get UnitOfMeasure() {
        return this.stock.get("UnitOfMeasure")
    }


    get Status() {
        return this.stock.get("status")
    }

    get Deleted() {
        return this.stock.get("deleted")
    }


    handleCreateProduct() {

        if (this.Name?.hasError('require')
            || this.Quantity?.hasError("required")
            || this.UnitOfMeasure?.hasError('required')
            || this.Status?.hasError('reuired')
            || this.Deleted?.hasError("reuired")) {

            return;
        } else {

            const stockItemAdd: StockAdd = {
                name: String(this.Name?.value),
                quantity: Number(this.Quantity?.value),
                unitOfMeasure: String(this.UnitOfMeasure?.value),
                status: this.Status?.value === "true" ? true : false,
                deleted: this.Deleted?.value === "true" ? true : false,
            }

            console.log(stockItemAdd.name)



            this.stockService.updateStock(this.id, stockItemAdd).subscribe({
                next: (response) => {
                    console.log('Cập nhật sản phẩm thành công', response);
                    alert('Cập nhật sản phẩm thành công');
                    setTimeout(() => {
                        this.router.navigate(['/stock-manage']);
                    }, 2000)

                },
                error: (err) => {
                    console.error('Lỗi không thể cập nhật sản phẩm:', err);
                }
            });
        }
    }
}
