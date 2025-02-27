import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { accountItem } from '../shared/accountItem';
import { AccountItemComponent } from "../shared/component/AccountFunction/account-item/accountItem.component";

@Component({
    selector: 'Account-componet-layout',
    imports: [
    RouterLink,
    AccountItemComponent
],
    templateUrl: 'Account.component.html',
    styleUrl: 'Account.component.css',
    standalone: true,

})
export class AccountLayoutComponent {
    accounts: accountItem[] = [
        {
            id: 1,
            username: "Nguyễn Văn A",
            email: "anh@gmail.com",
            phoneNumber: "123123123",
            address: "Đống Đa, Hà Nội",
            password: "123123",
            creatAt: new Date('2023-01-15T08:30:00'), // Ngày tạo tài khoản
            Status: true,
            deleted: false,

        },
        {
            id: 2,
            username: "Nguyễn Văn A",
            email: "anh@gmail.com",
            phoneNumber: "123123123",
            address: "Đống Đa, Hà Nội",
            password: "123123",
            creatAt: new Date('2023-01-15T08:30:00'), // Ngày tạo tài khoản
            Status: true,
            deleted: false,

        },
        {
            id: 3,
            username: "Nguyễn Văn A",
            email: "anh@gmail.com",
            phoneNumber: "123123123",
            address: "Đống Đa, Hà Nội",
            password: "123123",
            creatAt: new Date('2023-01-15T08:30:00'), // Ngày tạo tài khoản
            Status: true,
            deleted: false,

        },
    ]
}
