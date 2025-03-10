import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';

import { NgFor } from '@angular/common';
import { stockItem } from '../../../stockItem';
import { StockService } from '../../../../../services/StockService';


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


    constructor(private StockService: StockService) {
    }


    handleDeleteStock = (id: number) => {
        this.StockService.deleteStock(id).subscribe((data: any) => {
            console.log(id);
            console.log(data);
            console.log(typeof (data))
            if (data == id) {
                this.stock = this.stock.filter(item => item.id !== id)
                window.location.reload();
            }
        })
    }



}
