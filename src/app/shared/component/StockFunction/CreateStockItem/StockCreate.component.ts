import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';
import { StockAdd } from '../../../stockItem';
import { StockService } from '../../../../../services/StockService';
import { response } from 'express';
import { error } from 'console';
@Component({
    selector: 'product-create-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,




    ],
    templateUrl: 'StockCreate.component.html',
    styleUrl: 'StockCreate.component.css',
    standalone: true,

})
export class StockCreateComponent {
    stock = new FormGroup({
        name: new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
        unitOfMeasure: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        deleted: new FormControl('', Validators.required)

    })

    constructor(private StockService: StockService, private router: Router) {

    }

    get Name() {
        return this.stock.get("name")
    }

    get Quantity() {
        return this.stock.get("quantity")
    }

    get unitOfMeasure() {
        return this.stock.get("unitOfMeasure")
    }


    get Status() {
        return this.stock.get("status")
    }

    get Deleted() {
        return this.stock.get("deleted")
    }


    handleCreateProduct() {
        console.log(this.unitOfMeasure)
        
        if (this.Name?.hasError('require')
            || this.Quantity?.hasError("required")
            || this.unitOfMeasure?.hasError('required')
            || this.Status?.hasError('reuired')
            || this.Deleted?.hasError("reuired")) {
          
            return;
        } else {
            const StockAdd: StockAdd = {
                name: String(this.Name?.value),
                quantity: Number(this.Quantity?.value),
                unitOfMeasure: String(this.unitOfMeasure?.value),
                status: this.Status?.value === "true",
                deleted: false,
            };
            this.StockService.addStock(StockAdd).subscribe(
                response => {
                    alert("Tạo mới sản phẩm trong kho hàng thành công");
                    setTimeout(() => {
                        this.router.navigate(['/stock-manage']);
                    }, 2000)
                },
                error => {
                    alert("Có lỗi khi thêm danh sách kho hàng")
                }
            )

        }

    }

}
