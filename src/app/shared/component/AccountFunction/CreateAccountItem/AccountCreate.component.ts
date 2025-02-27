import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';
@Component({
    selector: 'product-create-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,




    ],
    templateUrl: 'AccountCreate.component.html',
    styleUrl: 'AccountCreate.component.css',
    standalone: true,

})
export class AccountCreateComponent {
    account = new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phoneNumber: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        createAt: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        deleted: new FormControl('', Validators.required)

    })

    constructor() {

    }

    getUserName() {
        return this.account.get("username")
    }

    getEmail() {
        return this.account.get("email")
    }

    getPhoneNumber() {
        return this.account.get("phoneNumber")
    }
    getAddress() {
        return this.account.get("address")
    }

    getPassword() {
        return this.account.get("password")
    }
    getCreateaAt() {
        return this.account.get("createAt")
    }

    getStatus(){
        return this.account.get("status")
    }

    getDeleted(){
        return this.account.get("deleted")
    }


    handleCreateProduct() {

    }

}
