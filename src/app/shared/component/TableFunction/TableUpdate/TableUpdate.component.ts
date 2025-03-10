import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';
import { TableService } from '../../../../../services/TableService';
import { tableCoffe, tableCoffeAdd } from '../../../tableIteam';
@Component({
    selector: 'table-update-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,




    ],
    templateUrl: 'TableUpdate.component.html',
    styleUrl: 'TableUpdate.component.css',
    standalone: true,

})
export class TableUpdateComponent {
    stock = new FormGroup({
        name: new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
        ChairNumber: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        deleted: new FormControl('', Validators.required)

    })
    id =0;
    constructor(private tableService: TableService, private router: Router , private route : ActivatedRoute) {
        this.id = Number(route.snapshot.paramMap.get('id'))
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

    handleTableUpdate() {
        console.log(this.ChairNumber);
        if (this.Name?.hasError("required")
            || this.ChairNumber?.hasError("Reuired")
            || this.Status?.hasError("reuired")
            || this.Deleted?.hasError("reuired"))
            return;
        const tableCoffe: tableCoffe = {
            id:this.id,
            tableName: String(this.Name?.value),
            ChairNumber: Number(this.ChairNumber?.value),
            status: Boolean(this.Status?.value),
            deleted: Boolean(this.Deleted?.value),
        }

        this.tableService.updateTable(tableCoffe.id , tableCoffe).subscribe(
            response => {
                console.log("Bàn đã được tạo", response);
                alert("Tạo bàn   thành công");
                setTimeout(() => {
                    this.router.navigate(['/Account-manage']);
                }, 2000)
            },
            error => {
                // console.log(response)
                console.error('Lỗi khi sửa thông tin bàn:', error);
                alert("Có lỗi khi sửa thông tin bàn")
                // Xử lý lỗi nếu cần
            }
        )
    }

}
