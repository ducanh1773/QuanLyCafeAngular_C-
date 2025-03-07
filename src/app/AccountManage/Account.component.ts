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




    ngOnInit(): void {
        this.getAccountApi = this.accountService
            .getAccount()
            .subscribe(
                (response: accountItem[]) => {
                    this.accounts = response.map(item => ({
                        id: item.id,
                        userName: item.userName,
                        email: item.email,
                        phoneNumber: item.phoneNumber,
                        address: item.address,
                        password: item.password,
                        creatAt: new Date(item.creatAt),
                        Status: item.Status,
                        deleted: item.deleted,

                    }));
                   
                },
                (error) => {
                    console.error('Lỗi khi lấy danh sách tài khoản:', error);
                }
            );
    }

   


}
