import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';
import { accountItem, accountItemAdd } from '../../../accountItem';
import { AccountService } from '../../../../../services/AccountSerivice';
import { response } from 'express';
import { Router } from '@angular/router';
import { FundItem, FundItemAdd } from '../../../FundItem';
import { FundService } from '../../../../../services/FundsService';
@Component({
    selector: 'fund-create-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,
    ],
    templateUrl: 'FundCreate.component.html',
    styleUrl: 'FundCreate.component.css',
    standalone: true,

})
export class FundCreateComponent {
    fundAdd = new FormGroup({
        FundName: new FormControl('', Validators.required),
        SumPrice: new FormControl('', Validators.required),
        detail_status: new FormControl('', Validators.required),
        creat_at: new FormControl('', Validators.required),
    })

    constructor(private fundService: FundService, private router: Router) {

    }

    get FundName() {

        return this.fundAdd.get('FundName')
    }

    get SumPrice() {
        return this.fundAdd.get("SumPrice")
    }

    get detailStatus() {
        return this.fundAdd.get("detai_status")
    }
    get createAt() {
        return this.fundAdd.get("create_at")
    }



    handleCreateAccount() {
        // Kiểm tra các trường bắt buộc
        console.log(this.FundName, this.SumPrice, this.detailStatus, this.createAt)
        if (
            this.FundName?.hasError('required') ||
            this.SumPrice?.hasError('required') ||
            this.detailStatus?.hasError('required') ||
            this.createAt?.hasError('required') 
            // || 
            //             this.getStatus()?.hasError('required')
        ) {
            return; // Nếu có lỗi, không thực hiện gì
        } else {
            // Lấy giá trị từ biểu mẫu
            const fundItemAdd: FundItemAdd = {
                FundName: String(this.FundName?.value),
                SumPrice: Number(this.SumPrice?.value),
                detail_status: String(this.detailStatus?.value),
                creat_at:new Date(),
            
            };

            // Gọi API để tạo tài khoản mới
            this.fundService.submitFundData(fundItemAdd).subscribe(
                response => {
                    console.log('Quỹ đã được tạo:', response);
                    // Có thể thực hiện các hành động khác như chuyển hướng hoặc thông báo
                    alert("Tạo quỹ thành công");
                    setTimeout(() => {
                        this.router.navigate(['/fund-manage']);
                    }, 2000)
                },
                error => {
                    // console.log(response)
                    console.error('Lỗi khi tạo tài khoản:', error);
                    alert("Có lỗi khi tạo tài khoản")
                    // Xử lý lỗi nếu cần
                }
            );
        }

    }
}
