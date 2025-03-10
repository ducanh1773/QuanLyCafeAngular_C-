import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';
import { stockSupplyDetails } from '../../../stockSupplyDetail';
import { StockItemOnSupplyComponent } from './StockItemOnSupply/StockItemOnSupply.component';
import { StockService } from '../../../../../services/StockService';
import { Subscription } from 'rxjs';
import { stockItem } from '../../../stockItem';
@Component({
    selector: 'supply-create-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,
        StockItemOnSupplyComponent,



    ],
    templateUrl: 'SupplyCreate.component.html',
    styleUrl: 'SupplyCreate.component.css',
    standalone: true,

})
export class SupplyCreateComponent implements OnInit {
    getStockApi: Subscription = new Subscription();
    stockItems: stockItem[] = [];
    stock = new FormGroup({
        name: new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
        UnitOfMeasure: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        deleted: new FormControl('', Validators.required)

    })

    constructor(private stockService: StockService) {

    }

    stockSupply: stockSupplyDetails[] = [{
        idStock: 1,
        Name: "cà phề",
        UnitOfMeasure: "kg",
    }]

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






}
