import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';

import { NgFor } from '@angular/common';
import { stockSupplyDetails } from '../../../../stockSupplyDetail';


@Component({
    selector: 'stock-item-supply-component-layout',
    imports: [
        RouterLink,

        NgFor,


    ],
    templateUrl: './StockItemOnSupply.component.html',
    styleUrl: './StockItemOnSupply.component.css',
    standalone: true,

})
export class StockItemOnSupplyComponent {
    @Input() supplyItem: stockSupplyDetails[] = [];
    @Output() dataEvent = new EventEmitter<number>();






}
