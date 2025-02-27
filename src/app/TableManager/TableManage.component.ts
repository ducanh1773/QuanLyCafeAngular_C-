import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { stockItem } from '../shared/stockItem';
import { StockItemComponent } from "../shared/component/StockFunction/StockItem/stockItem.component";
import { tableCoffe } from '../shared/tableIteam';
import { TableItemComponent } from "../shared/component/TableFunction/table-item/tableitem.component";
@Component({
    selector: 'table-list-component-layout',
    imports: [
    RouterLink,
    StockItemComponent,
    TableItemComponent
],
    templateUrl: 'TableManage.component.html',
    styleUrl: 'TableManage.component.css',
    standalone: true,

})
export class TableManageComponent {
    tableItems: tableCoffe[] = [
        {
            id: 1,
            tableName: "Bàn 01",
            ChairNumber : 10,
            status: true,
            deleted: false,
           
        },
        {
            id: 2,
            tableName: "Bàn 02",
            ChairNumber : 10,
            status: true,
            deleted: false,
           
        },
        {
            id: 3,
            tableName: "Bàn 03",
            ChairNumber : 10,
            status: true,
            deleted: false,
           
        },
      
    ];

}
