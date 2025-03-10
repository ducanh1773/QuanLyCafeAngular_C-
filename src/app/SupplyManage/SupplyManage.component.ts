import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SupplyItem } from '../shared/supplyItem';
import { SupplyItemComponent } from '../shared/component/SupplyFunction/SupplyItem/supplyItem.component';
import { SupplyService } from '../../services/SupplyService';
import { Subscription } from 'rxjs';
@Component({
    selector: 'supply-list-component-layout',
    imports: [
        RouterLink,
        SupplyItemComponent
    ],
    templateUrl: 'SupplyManage.component.html',
    styleUrl: 'SupplyManage.component.css',
    standalone: true,

})
export class SupplyManageComponent implements OnInit {
    supplys: SupplyItem[] = [];

    getSupplyApi: Subscription = new Subscription();

    constructor(private supplyService: SupplyService) {

    }


    ngOnInit(): void {
        this.getSupplyApi = this.supplyService.getSupply()
            .subscribe((response: SupplyItem[]) => {
                this.supplys = response.map(item => ({
                    id: item.id,
                    id_Account: item.id_Account,
                    time_In: new Date(item.time_In),
                    deleted: item.deleted,
                    status: item.status,

                }));
            },


            )
    }
}
