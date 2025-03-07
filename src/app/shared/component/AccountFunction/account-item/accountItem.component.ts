import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';

import { NgFor } from '@angular/common';
import { accountItem } from '../../../accountItem';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../../../../../services/AccountSerivice';

@Component({
    selector: 'account-item-component-layout',
    imports: [
        RouterLink,
        NgFor,
        HttpClientModule,


    ],
    templateUrl: './accountItem.component.html',
    styleUrl: './accountItem.component.css',
    standalone: true,

})
export class AccountItemComponent {
    @Input() accounts: accountItem[] = [];
    @Output() dataEvent = new EventEmitter<number>();

    constructor(private AccountService: AccountService) {
    }

    handleDeleteAccount = (id: number) => {
        this.AccountService.deleteAccount(id).subscribe(( data : any) => {
            console.log(id);
            console.log(data);
            console.log(typeof (data))
            if (data == id) {
                this.accounts = this.accounts.filter(item => item.id !== id)
                window.location.reload();
            }
        })
    }



}
