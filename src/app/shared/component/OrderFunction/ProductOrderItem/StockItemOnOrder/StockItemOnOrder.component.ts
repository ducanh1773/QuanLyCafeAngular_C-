import { Component, Input, Output, EventEmitter } from '@angular/core';
import { stockItem } from '../../../../stockItem';
import { NgFor } from '@angular/common';

@Component({
    selector: 'stock-item-order-component-layout',
    templateUrl: './StockItemOnOrder.component.html',
    styleUrl: './StockItemOnOrder.component.css',
    standalone: true,
    imports: [NgFor],
})
export class StockItemOnOrderComponent {
    @Input() stocks: stockItem[] = [];
    @Input() productId!: number; // Nhận ID sản phẩm từ component cha
    @Input() quantityProduct!: number;
    @Output() dataEvent = new EventEmitter<{ productId: number; quantityProduct: number; stock: { id: number; quantity: number }[] }>();

    stockQuantities: { id: number; quantity: number }[] = []; // Mảng để lưu trữ ID và số lượng

    onValueChange(stockId: number, event: any) {
        const quantity = Number(event.target.value);
        const index = this.stockQuantities.findIndex(stock => stock.id === stockId);

        if (index !== -1) {
            this.stockQuantities[index].quantity = quantity;
        } else {
            this.stockQuantities.push({ id: stockId, quantity });
        }

        this.emitData();
    }

    emitData() {
        this.dataEvent.emit({
            productId: this.productId,
            quantityProduct: this.quantityProduct, // Gửi giá trị nhập vào
            stock: this.stockQuantities
        });
    }
}