import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { tableCoffe } from '../shared/tableIteam';
import { TableOrderItemComponent } from '../shared/component/OrderFunction/TableItem/tableOrderItem.component';
import { productItem } from '../shared/productItem';
import { Subscription } from 'rxjs';
import { TableService } from '../../services/TableService';

@Component({
    selector: 'order-component-layout',
    imports: [
        RouterLink,
        LoginComponent,
        TableOrderItemComponent,
    ],
    templateUrl: './OrderManager.component.html',
    styleUrl: './OrderManager.component.css',
    standalone: true,

})
export class OrderComponent implements OnInit {
    tableItems: tableCoffe[] = [];
    getTableApi: Subscription = new Subscription();

    constructor(private tableService: TableService) {
    }


    ngOnInit(): void {
        this.getTableApi = this.tableService
            .getTable()
            .subscribe((response: tableCoffe[]) => {
                this.tableItems = response.map(item => ({
                    id: item.id,
                    tableName: item.tableName,
                    chairNumber: item.chairNumber,
                    status: item.status,
                    deleted: item.deleted,
                }));
                console.log(this.tableItems);
            },
                (error) => {
                    console.error("Lỗi khi lấy danh sách các bàn", error)
                }

            );
    }


}