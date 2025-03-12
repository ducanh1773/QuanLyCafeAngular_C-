import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { tableCoffe } from '../shared/tableIteam';
import { TableOrderItemComponent } from '../shared/component/OrderFunction/TableItem/tableOrderItem.component';
import { productItem } from '../shared/productItem';

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
export class OrderComponent {
    tableItems: tableCoffe[] = [
        {
            id: 1,
            tableName: "Bàn 01",
            chairNumber: 10,
            status: true,
            deleted: false,

        },
        {
            id: 2,
            tableName: "Bàn 02",
            chairNumber: 10,
            status: true,
            deleted: false,

        },
        {
            id: 3,
            tableName: "Bàn 03",
            chairNumber: 10,
            status: true,
            deleted: false,

        },
        {
            id: 4,
            tableName: "Bàn 03",
            chairNumber: 10,
            status: true,
            deleted: false,

        },
        {
            id: 5,
            tableName: "Bàn 03",
            chairNumber: 10,
            status: true,
            deleted: false,

        },
        {
            id: 6,
            tableName: "Bàn 03",
            chairNumber: 10,
            status: true,
            deleted: false,

        },
        {
            id: 7,
            tableName: "Bàn 03",
            chairNumber: 10,
            status: true,
            deleted: false,

        },
        {
            id: 8,
            tableName: "Bàn 03",
            chairNumber: 10,
            status: true,
            deleted: false,

        },
        {
            id: 9,
            tableName: "Bàn 03",
            chairNumber: 10,
            status: true,
            deleted: false,

        },
        {
            id: 10,
            tableName: "Bàn 03",
            chairNumber: 10,
            status: true,
            deleted: false,

        },

    ];


}