import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { stockItem } from '../shared/stockItem';
import { StockItemComponent } from "../shared/component/StockFunction/StockItem/stockItem.component";
import { Subscription } from 'rxjs';
@Component({
    selector: 'stock-list-component-layout',
    imports: [
        RouterLink,
        StockItemComponent,
    ],
    templateUrl: 'StockManage.component.html',
    styleUrl: 'StockManage.component.css',
    standalone: true,

})
export class StockManageComponent {
    stockItems: stockItem[] = [];
    getStockApi:Subscription = new Subscription();
    


}
 