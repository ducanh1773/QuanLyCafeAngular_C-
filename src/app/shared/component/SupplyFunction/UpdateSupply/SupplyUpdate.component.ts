import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgFor, NgIf } from '@angular/common';
import { StockItemOnSupplyComponent } from './StockItemOnSupply/StockItemOnSupply.component';
import { StockService } from '../../../../../services/StockService';
import { Subscription } from 'rxjs';
import { stockItem } from '../../../stockItem';
import { FundService } from '../../../../../services/FundsService';
import { AccountService } from '../../../../../services/AccountSerivice';
import { SupplyService } from '../../../../../services/SupplyService';

@Component({
    selector: 'supply-update-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,
        StockItemOnSupplyComponent,
        NgFor,
    ],
    templateUrl: 'SupplyUpdate.component.html',
    styleUrl: 'SupplyUpdate.component.css',
    standalone: true,
})
export class SupplyUpdateComponent implements OnInit {
    getStockApi: Subscription = new Subscription();
    getFundApi: Subscription = new Subscription();
    getAccountApi: Subscription = new Subscription();
    stockItems: stockItem[] = [];
    fundList: any[] = [];
    accountList: any[] = [];

    addSupply = new FormGroup({
        id_Account: new FormControl('', Validators.required),
        paymentMethod: new FormControl('', Validators.required)
    });

    selectedStockItems: { [id: number]: { quantity: number; price: number; FundName: string } } = {};
    id = 0
    constructor(private stockService: StockService, private accountService: AccountService, private functService: FundService, private supplyService: SupplyService, private route: ActivatedRoute) {
        this.id = Number(route.snapshot.paramMap.get('id'))
    }

    ngOnInit(): void {
        this.getStockApi = this.stockService.getStock().subscribe(
            (response: stockItem[]) => {
                this.stockItems = response.map(item => ({
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    unitOfMeasure: item.unitOfMeasure,
                    status: item.status,
                    deleted: item.deleted,
                    price: 0,
                }));
            },
            (error) => {
                console.error('Lỗi khi lấy danh sách kho hàng:', error);
            }
        );
    }

    onDataReceived(data: { id: number; quantity: number; price: number; FundName: string }) {
        this.selectedStockItems[data.id] = {
            quantity: data.quantity,
            price: data.price,
            FundName: data.FundName,
        };
        console.log('Dữ liệu nhận từ component con:', this.selectedStockItems);
    }

    onAccountMethodFocus(): void {
        this.getAccountApi = this.accountService.getAccount().subscribe(
            (accounts: any[]) => {
                this.accountList = accounts;
                console.log('Danh sách tài khoản:', this.accountList);
            },
            (error) => {
                console.error('Lỗi khi lấy danh sách tài khoản:', error);
            }
        );
    }

    submitSupply() {
        const supplyData = {
            UserName: this.addSupply.get('id_Account')?.value,
            time_In: new Date().toISOString(), // Set current timestamp or adjust as needed
            status: 'pending', // Assign a default status if required
            deleted: false, // Assuming false as default
            stocks: Object.keys(this.selectedStockItems).map(id => ({
                nameStock: this.stockItems.find(item => item.id === Number(id))?.name || '',
                quantity: this.selectedStockItems[Number(id)].quantity,
                price: this.selectedStockItems[Number(id)].price,
                paymentMethod: this.selectedStockItems[Number(id)].FundName,
            }))
        };

        console.log('Dữ liệu đã chọn:', this.selectedStockItems);

        console.log('Dữ liệu gửi lên API:', supplyData);
        this.supplyService.updateSupply( this.id , supplyData).subscribe(
            response => {
                console.log('Gửi dữ liệu thành công:', response);
                alert('Đơn nhập hàng đã được gửi thành công!');
            },
            error => {
                console.error('Lỗi khi gửi dữ liệu:', error);
                alert('Có lỗi xảy ra khi gửi đơn nhập hàng.');
            }
        );
    }
}
