import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';

import { NgFor } from '@angular/common';
import { accountItem } from '../../../accountItem';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../../../../../services/AccountSerivice';
import { FundService } from '../../../../../services/FundsService';
import { FundItem } from '../../../FundItem';

@Component({
    selector: 'fund-item-component-layout',
    imports: [
        RouterLink,
        NgFor,
        HttpClientModule,



    ],
    templateUrl: './fundItem.component.html',
    styleUrl: './fundItem.component.css',
    standalone: true,

})
export class FundItemComponent {
    @Input() fund: FundItem[] = [];
    @Output() dataEvent = new EventEmitter<number>();

    constructor(private FundService: FundService) {
    }

    handleDeleteAccount = (id: number) => {
        this.FundService.deleteFund(id).subscribe((data: any) => {
            console.log(id);
            console.log(data);
            console.log(typeof (data))
            if (data == id) {
                this.fund = this.fund.filter(item => item.id !== id)
                window.location.reload();
            }
        })
    }



}
