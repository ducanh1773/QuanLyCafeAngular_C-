import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { stockItem } from '../shared/stockItem';
import { StockItemComponent } from "../shared/component/StockFunction/StockItem/stockItem.component";
import { tableCoffe } from '../shared/tableIteam';
import { TableItemComponent } from "../shared/component/TableFunction/table-item/tableitem.component";
import { Subscription } from 'rxjs';
import { TableService } from '../../services/TableService';
import { response } from 'express';
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
    tableItems: tableCoffe[] = [];
    getTableApi: Subscription = new Subscription();
    constructor(private tableService: TableService) {
        this.getTableApi = this.tableService
            .getTable()
            .subscribe((response: tableCoffe[]) => {
                this.tableItems = response.map(item => ({
                    id: item.id,
                    tableName: item.tableName,
                    ChairNumber: item.ChairNumber,
                    status: item.status,
                    deleted: item.deleted,
                }));
            });

    }

}
