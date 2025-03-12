import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { FundService } from '../../../../../../services/FundsService';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'stock-item-supply-component-layout',
    templateUrl: './StockItemOnSupply.component.html',
    styleUrl: './StockItemOnSupply.component.css',
    standalone: true,
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,
        StockItemOnSupplyComponent,
        NgFor,
    ],
})
export class StockItemOnSupplyComponent {
    @Input() supplyItem: any[] = [];
    @Output() dataEvent = new EventEmitter<{ id: number; quantity: number; price: number; FundName: string }>();

    getFundApi: Subscription = new Subscription();
    fundList: any[] = [];
    private selectedValues: { [id: number]: { quantity: number; price: number; FundName: string } } = {};

    constructor(private fundService: FundService) {}

    onValueChange(id: number, type: 'quantity' | 'price', event: any) {
        const value = Number(event.target.value);

        if (!this.selectedValues[id]) {
            this.selectedValues[id] = { quantity: 0, price: 0, FundName: '' };
        }

        this.selectedValues[id][type] = value;

        this.emitData(id);
    }

    onFundNameChange(id: number, event: any) {
        const FundName = event.target.value;

        if (!this.selectedValues[id]) {
            this.selectedValues[id] = { quantity: 0, price: 0, FundName: '' };
        }

        this.selectedValues[id].FundName = FundName;

        this.emitData(id);
    }

    emitData(id: number) {
        this.dataEvent.emit({
            id,
            quantity: this.selectedValues[id].quantity,
            price: this.selectedValues[id].price,
            FundName: this.selectedValues[id].FundName,
        }
);
       
    }

    onPaymentMethodFocus(): void {
        this.getFundApi = this.fundService.getFundList().subscribe(
            (funds: any[]) => {
                this.fundList = funds;
            },
            (error) => {
                console.error('Lỗi khi lấy danh sách quỹ:', error);
            }
        );

    }



}
