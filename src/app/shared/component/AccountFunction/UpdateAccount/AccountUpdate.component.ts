import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'account-update-component-layout',
    imports: [
        RouterLink,

        ReactiveFormsModule,
        NgIf,


    ],
    templateUrl: 'AccountUpdate.component.html',
    styleUrl: 'AccountUpdate.component.css',
    standalone: true,

})
export class AccountUpdateComponent {
    accountUpdate = new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phoneNumber: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        createAt: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        deleted: new FormControl('', Validators.required)
    })
    id = 0;
    constructor(private route: ActivatedRoute) {
        this.id = Number(route.snapshot.paramMap.get('id'));
    }



    getUserName() {
        return this.accountUpdate.get("username")
    }

    getEmail() {
        return this.accountUpdate.get("email")
    }

    getPhoneNumber() {
        return this.accountUpdate.get("phoneNumber")
    }
    getAddress() {
        return this.accountUpdate.get("address")
    }

    getPassword() {
        return this.accountUpdate.get("password")
    }
    getCreateaAt() {
        return this.accountUpdate.get("createAt")
    }

    getStatus() {
        return this.accountUpdate.get("status")
    }

    getDeleted() {
        return this.accountUpdate.get("deleted")
    }

    handleUpdateProduct() {
        if (this.getUserName()?.hasError('required') || this.getEmail()?.hasError('required') || this.getPhoneNumber()?.hasError('required') || this.getAddress()?.hasError('required') || this.getCreateaAt()?.hasError('required') || this.getStatus()?.hasError('required') || this.getDeleted()?.hasError('required')) {
            return;
        } else {

        }
    }

}
