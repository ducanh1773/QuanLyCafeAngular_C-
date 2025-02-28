import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';

import { NgFor } from '@angular/common';
import { tableCoffe } from '../../../tableIteam';


@Component({
    selector: 'table-item-order-component-layout',
    imports: [
        RouterLink,

        NgFor,


    ],
    templateUrl: './tableOrderItem.component.html',
    styleUrl: './tableOrderItem.component.css',
    standalone: true,

})
export class TableOrderItemComponent {
    @Input() tables: tableCoffe[] = [];
    @Output() dataEvent = new EventEmitter<number>();






}
