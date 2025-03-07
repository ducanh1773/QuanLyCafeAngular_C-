import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';
import { stockSupplyDetails } from '../../../stockSupplyDetail';
import { StockItemOnSupplyComponent } from './StockItemOnSupply/StockItemOnSupply.component';
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
export class SupplyCreateComponent {
    stock = new FormGroup({
        name: new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
        UnitOfMeasure: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        deleted: new FormControl('', Validators.required)

    })

    constructor() {

    }

    stockSupply: stockSupplyDetails[] = [{
        idStock: 1,
        Name: "cà phề",
        UnitOfMeasure: "kg",
    }]


}
