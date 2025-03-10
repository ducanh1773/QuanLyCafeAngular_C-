// import { NgIf } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
// import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
// import { stockSupplyDetails } from '../../../stockSupplyDetail';
// import { StockItemOnSupplyComponent } from '../CreateSupply/StockItemOnSupply/StockItemOnSupply.component';

// @Component({
//     selector: 'account-update-component-layout',
//     imports: [
//         RouterLink,
//         ReactiveFormsModule,
//         NgIf,
//         StockItemOnSupplyComponent



//     ],
//     templateUrl: 'SupplyUpdate.component.html',
//     styleUrl: 'SupplyUpdate.component.css',
//     standalone: true,

// })
// export class SupplyUpdateComponent {


//     stock = new FormGroup({
//         name: new FormControl('', Validators.required),
//         quantity: new FormControl('', Validators.required),
//         UnitOfMeasure: new FormControl('', Validators.required),
//         status: new FormControl('', Validators.required),
//         deleted: new FormControl('', Validators.required)

//     })
//     id = 0;
//     constructor(private route: ActivatedRoute) {
//         this.id = Number(route.snapshot.paramMap.get('id'));
//     }


//     stockSupply: stockSupplyDetails[] = [{
//         idStock: 1,
//         Name: "cà phề",
//         UnitOfMeasure: "kg",
//     }]

//     getName() {
//         return this.stock.get("name")
//     }

//     getQuantity() {
//         return this.stock.get("quantity")
//     }

//     getUnitOfMeasure() {
//         return this.stock.get("UnitOfMeasure")
//     }


//     getStatus() {
//         return this.stock.get("status")
//     }

//     getDeleted() {
//         return this.stock.get("deleted")
//     }


//     handleCreateProduct() {

//     }
// }
