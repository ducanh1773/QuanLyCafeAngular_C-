import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { productItem } from '../../../productItem';
import { StockService } from '../../../../../services/StockService';
import { stockItem } from '../../../stockItem';
import { Subscription } from 'rxjs';
import { StockItemOnOrderComponent } from "./StockItemOnOrder/StockItemOnOrder.component";


@Component({
    selector: 'product-order-item-component-layout',
    imports: [
        RouterLink,
        NgFor,
        StockItemOnOrderComponent
    ],
    templateUrl: './productOrder.component.html',
    styleUrl: './productOrder.component.css',
    standalone: true,

})
export class productOrdertItemComponent implements OnInit {
    @Input() products: productItem[] = [];
    @Output() dataEvent = new EventEmitter<{ productId: number; quantityProduct: number; stock: { id: number; quantity: number }[] }>();
    stockItems: stockItem[] = [];
    getStockApi: Subscription = new Subscription();
    quantityProduct : number = 0;
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

    handleStockData(event: { productId: number; quantityProduct: number; stock: { id: number; quantity: number }[] }) {
        this.dataEvent.emit(event);
    }

    onQuantityChange(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        this.quantityProduct = inputElement.value ? Number(inputElement.value) : 0;
    }


}
