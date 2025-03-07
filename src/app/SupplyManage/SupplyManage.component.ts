import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SupplyItem } from '../shared/supplyItem';
import { SupplyItemComponent } from '../shared/component/SupplyFunction/SupplyItem/supplyItem.component';
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
export class SupplyManageComponent {
    supplys: SupplyItem[] = [{
        id: 1,
        id_account: 2,
        Time_In: new Date(),
        Time_Supply: new Date(),
        Status: true,
        Deleted: false,
    }]

}
