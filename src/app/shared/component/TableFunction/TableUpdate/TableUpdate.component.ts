import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';
@Component({
    selector: 'table-update-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,




    ],
    templateUrl: 'TableUpdate.component.html',
    styleUrl: 'TableUpdate.component.css',
    standalone: true,

})
export class TableUpdateComponent {
    stock = new FormGroup({
        name: new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
        UnitOfMeasure: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        deleted: new FormControl('', Validators.required)

    })



    constructor() {

    }

    getName() {
        return this.stock.get("name")
    }

    getQuantity() {
        return this.stock.get("quantity")
    }

    getUnitOfMeasure() {
        return this.stock.get("UnitOfMeasure")
    }
  

    getStatus(){
        return this.stock.get("status")
    }

    getDeleted(){
        return this.stock.get("deleted")
    }


    handleCreateProduct() {

    }

}
