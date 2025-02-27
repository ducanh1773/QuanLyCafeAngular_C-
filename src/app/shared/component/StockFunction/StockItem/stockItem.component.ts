import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';

import { NgFor } from '@angular/common';
import { stockItem } from '../../../stockItem';


@Component({
    selector: 'stock-item-component-layout',
    imports: [
        RouterLink,

        NgFor,


    ],
    templateUrl: './stockItem.component.html',
    styleUrl: './stockItem.component.css',
    standalone: true,

})
export class StockItemComponent {
    @Input() stock: stockItem[] = [];
    @Output() dataEvent = new EventEmitter<number>();





}
