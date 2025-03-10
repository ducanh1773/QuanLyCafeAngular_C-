import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { stockItem } from '../shared/stockItem';
import { StockItemComponent } from "../shared/component/StockFunction/StockItem/stockItem.component";
import { Subscription } from 'rxjs';
import { StockService } from '../../services/StockService';
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
    getStockApi: Subscription = new Subscription();

    constructor(private stockService: StockService) {

    }

    ngOnInit(): void {
       
        this.getStockApi = this.stockService
            .getStock()
            .subscribe(
                (response: stockItem[]) => {
                   console.log(response);
                    this.stockItems = response.map(item => ({
                        id: item.id,
                        name: item.name,
                        quantity: item.quantity,
                        unitOfMeasure: item.unitOfMeasure,  
                        status: item.status,
                        deleted: item.deleted,
                       

                    }));

                },
                (error) => {
                    console.error('Lỗi khi lấy danh sách kho hàng :', error);
                }
            );
    }

}
