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
import { FundItem } from '../shared/FundItem';
import { FundService } from '../../services/FundsService';
import { FundItemComponent } from "../shared/component/FundFunction/fund-item/fundItem.component";

@Component({
    selector: 'Fund-componet-layout',
    imports: [
        RouterLink,
        AccountItemComponent,
        HttpClientModule,
        FundItemComponent,
    ],
    providers: [HttpClient],
    templateUrl: 'Fund.component.html',
    styleUrl: 'Fund.component.css',
    standalone: true,

})
export class FundLayoutComponent implements OnInit {

    fundItem: FundItem[] = [];
    getFundApi: Subscription = new Subscription();

    constructor(private fundService: FundService) {

    }

    ngOnInit(): void {
        this.getFundApi = this.fundService
            .getFundList()
            .subscribe(
                (response: FundItem[]) => {
                    this.fundItem = response.map(item => ({
                        id: item.id,
                        SumPrice: item.SumPrice,
                        creat_at: item.creat_at,
                        fundName: item.fundName,
                        detail_status: item.detail_status,
                    }));
                    console.log(response);

                },
                (error) => {
                    console.error('Lỗi khi lấy danh sách tài khoản:', error);
                }
            );
    }
}








