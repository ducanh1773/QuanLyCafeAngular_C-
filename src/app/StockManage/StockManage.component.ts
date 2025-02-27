import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { stockItem } from '../shared/stockItem';
import { StockItemComponent } from "../shared/component/StockFunction/StockItem/stockItem.component";
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
    stockItems: stockItem[] = [
        {
            id: 1,
            name: "Gạo Jasmine",
            quantity: 100,
            status: true,
            deleted: false,
            UnitOfMeasure: "kg",
        },
        {
            id: 2,
            name: "Đường trắng",
            quantity: 50,
            status: true,
            deleted: false,
            UnitOfMeasure: "kg",
        },
        {
            id: 3,
            name: "Muối biển",
            quantity: 30,
            status: true,
            deleted: false,
            UnitOfMeasure: "kg",
        },
        {
            id: 4,
            name: "Bột mì",
            quantity: 20,
            status: true,
            deleted: false,
            UnitOfMeasure: "kg",
        },
        {
            id: 5,
            name: "Dầu ăn",
            quantity: 15,
            status: true,
            deleted: false,
            UnitOfMeasure: "lít",
        }
    ];

}
