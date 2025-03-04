import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { accountItem } from '../shared/accountItem';
import { AccountItemComponent } from "../shared/component/AccountFunction/account-item/accountItem.component";
import { AccountService } from '../../services/AccountSerivice';
import { Subscription } from 'rxjs';
import { map } from 'rxjs';
import { error } from 'console';
import { ResponseData } from '../shared/responData';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'Account-componet-layout',
    imports: [
        RouterLink,
        AccountItemComponent,
        HttpClientModule,


    ],
    providers: [HttpClient],
    templateUrl: 'Account.component.html',
    styleUrl: 'Account.component.css',
    standalone: true,

})
export class AccountLayoutComponent implements OnInit {

    accounts: accountItem[] = [];
    getAccountApi: Subscription = new Subscription();

    constructor(private accountService: AccountService) {
        // this.getAccountApi = new Subscription();
    }




    // ngOnInit(): void {
    //     console.log(123123)
    //     debugger
    //     this.getAccountApi = this.accountService
    //         .getAccount()
    //         .subscribe(
    //             (response: accountItem[]) => {
    //                 this.accounts = response.map(item => ({
    //                     id: item.id,
    //                     username: item.username,
    //                     email: item.email,
    //                     phoneNumber: item.phoneNumber,
    //                     address: item.address,
    //                     password: item.password,
    //                     creatAt: new Date(item.creatAt),
    //                     Status: item.Status,
    //                     deleted: item.deleted,
    //                 }));
    //                 console.log(this.accounts);
    //             },
    //             (error) => {
    //                 console.error('Lỗi khi lấy danh sách tài khoản:', error);
    //             }
    //         );
    // }

    ngOnInit(): void {
        console.log(123123)
        this.getAccountApi = this.accountService.getAccount().subscribe(
            (response: accountItem[]) => {
                this.accounts = response;
                console.log(this.accounts);
            },
            (error) => {
                console.error('Lỗi khi lấy danh sách tài khoản:', error);
            }
        );
    }




    // ngOnDestroy(): void {
    //     this.getAccountApi.unsubscribe(); // Hủy subscription để tránh rò rỉ bộ nhớ
    // }


    // accounts: accountItem[] = [
    //     {
    //         id: 1,
    //         username: "Nguyễn Văn A",
    //         email: "anh@gmail.com",
    //         phoneNumber: "123123123",
    //         address: "Đống Đa, Hà Nội",
    //         password: "123123",
    //         creatAt: new Date('2023-01-15T08:30:00'), // Ngày tạo tài khoản
    //         Status: true,
    //         deleted: false,

    //     },
    //     {
    //         id: 2,
    //         username: "Nguyễn Văn A",
    //         email: "anh@gmail.com",
    //         phoneNumber: "123123123",
    //         address: "Đống Đa, Hà Nội",
    //         password: "123123",
    //         creatAt: new Date('2023-01-15T08:30:00'), // Ngày tạo tài khoản
    //         Status: true,
    //         deleted: false,

    //     },
    //     {
    //         id: 3,
    //         username: "Nguyễn Văn A",
    //         email: "anh@gmail.com",
    //         phoneNumber: "123123123",
    //         address: "Đống Đa, Hà Nội",
    //         password: "123123",
    //         creatAt: new Date('2023-01-15T08:30:00'), // Ngày tạo tài khoản
    //         Status: true,
    //         deleted: false,

    //     },
    // ]


}
