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
    @Output() dataEvent = new EventEmitter<{ productId: number; quantity: number; stock: { id: number; quantity: number }[] }>();

    stockQuantities: { id: number; quantity: number }[] = []; // Mảng để lưu trữ ID và số lượng

    onValueChange(stockId: number, event: any) {
        const quantity = Number(event.target.value);

        // Cập nhật mảng stockQuantities
        const index = this.stockQuantities.findIndex(stock => stock.id === stockId);
        if (index !== -1) {
            this.stockQuantities[index].quantity = quantity;
        } else {
            this.stockQuantities.push({ id: stockId, quantity });
        }

        this.emitData(); // Gửi dữ liệu lên component cha
    }

    emitData() {
        const totalQuantity = this.stockQuantities.reduce((sum, stock) => sum + stock.quantity, 0);
        this.dataEvent.emit({ productId: this.productId, quantity: totalQuantity, stock: this.stockQuantities });
    }
}