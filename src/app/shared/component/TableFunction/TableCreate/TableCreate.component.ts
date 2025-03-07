import { Component } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';
import { tableCoffeAdd } from '../../../tableIteam';
import { TableService } from '../../../../../services/TableService';
import { response } from 'express';
@Component({
    selector: 'product-create-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,




    ],
    templateUrl: 'TableCreate.component.html',
    styleUrl: 'TableCreate.component.css',
    standalone: true,

})
export class TableCreateComponent {
    stock = new FormGroup({
        name: new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
        ChairNumber: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        deleted: new FormControl('', Validators.required)

    })

    constructor(private tableService: TableService, private route: Router) {

    }

    get Name() {
        return this.stock.get("name")
    }

    get ChairNumber() {
        return this.stock.get("ChairNumber")
    }




    get Status() {
        return this.stock.get("status")
    }

    get Deleted() {
        return this.stock.get("deleted")
    }


    handleCreateProduct() {
        console.log(this.ChairNumber);
        if (this.Name?.hasError("required")
            || this.ChairNumber?.hasError("Reuired")
            || this.Status?.hasError("reuired")
            || this.Deleted?.hasError("reuired"))
            return;
        const tableItemAdd: tableCoffeAdd = {
            tableName: String(this.Name?.value),
            chairNumber: Number(this.ChairNumber?.value),
            status: Boolean(this.Status?.value),
            deleted: Boolean(this.Deleted?.value),
        }

        this.tableService.addTable(tableItemAdd).subscribe(
            response => {
                console.log("Bàn đã được tạo", response);
                alert("Tạo bàn   thành công");
                setTimeout(() => {
                    this.route.navigate(['/Account-manage']);
                }, 2000)
            },
            error => {
                // console.log(response)
                console.error('Lỗi khi tạo tài khoản:', error);
                alert("Có lỗi khi tạo tài khoản")
                // Xử lý lỗi nếu cần
            }
        )
    }


}
