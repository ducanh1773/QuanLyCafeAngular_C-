import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';
import { accountItem, accountItemAdd } from '../../../accountItem';
import { AccountService } from '../../../../../services/AccountSerivice';
import { response } from 'express';
import { Router } from '@angular/router';
@Component({
    selector: 'product-create-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,
        




    ],
    templateUrl: 'AccountCreate.component.html',
    styleUrl: 'AccountCreate.component.css',
    standalone: true,

})
export class AccountCreateComponent {
    account = new FormGroup({
        UserName: new FormControl('', Validators.required),
        Email: new FormControl('', Validators.required),
        PhoneNumber: new FormControl('', Validators.required),
        Address: new FormControl('', Validators.required),
        Password: new FormControl('', Validators.required),


    })

    constructor(private accountService: AccountService, private router: Router) {

    }

    get UserName() {

        return this.account.get('UserName')
    }

    get Email() {
        return this.account.get("Email")
    }

    get PhoneNumber() {
        return this.account.get("PhoneNumber")
    }
    get Address() {
        return this.account.get("Address")
    }

    get Password() {

        return this.account.get("Password")
    }


    handleCreateAccount() {
        // Kiểm tra các trường bắt buộc
        console.log(this.UserName, this.Email, this.PhoneNumber, this.Address, this.Password)
        if (
            this.UserName?.hasError('required') ||
            this.Email?.hasError('required') ||
            this.PhoneNumber?.hasError('required') ||
            this.Address?.hasError('required') ||
            this.Password?.hasError('required')
            // || 
            //             this.getStatus()?.hasError('required')
        ) {
            return; // Nếu có lỗi, không thực hiện gì
        } else {
            // Lấy giá trị từ biểu mẫu
            const accountItemAdd: accountItemAdd = {
                UserName: String(this.UserName?.value),
                Email: String(this.Email?.value),
                PhoneNumber: String(this.PhoneNumber?.value),
                Address: String(this.Address?.value),
                Password: String(this.Password?.value),
                Status: true,
                Deleted: false,
            };

            // Gọi API để tạo tài khoản mới
            this.accountService.addAccount(accountItemAdd).subscribe(
                response => {
                    console.log('Tài khoản đã được tạo:', response);
                    // Có thể thực hiện các hành động khác như chuyển hướng hoặc thông báo
                    alert("Tạo tài khoản thành công");
                    setTimeout(() => {
                        this.router.navigate(['/Account-manage']);
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
