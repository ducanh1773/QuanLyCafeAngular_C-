import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterLink, RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../../../services/AccountSerivice';
import { accountItem, accountItemAdd } from '../../../accountItem';

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
        UserName: new FormControl('', Validators.required),
        Email: new FormControl('', Validators.required),
        PhoneNumber: new FormControl('', Validators.required),
        Address: new FormControl('', Validators.required),
        Password: new FormControl('', Validators.required),
      
    })
    id = 0;
    constructor(private accountService: AccountService, private router: Router, private route: ActivatedRoute) {
        this.id = Number(route.snapshot.paramMap.get('id'))
    }

    get UserName() {

        return this.accountUpdate.get('UserName')
    }

    get Email() {
        return this.accountUpdate.get("Email")
    }

    get PhoneNumber() {
        return this.accountUpdate.get("PhoneNumber")
    }
    get Address() {
        return this.accountUpdate.get("Address")
    }

    get Password() {

        return this.accountUpdate.get("Password")
    }



    handleUpdateAccount() {
        if (this.UserName?.hasError('required') || this.Email?.hasError('required') || this.PhoneNumber?.hasError('required') || this.Password?.hasError('required')) {
            return;
        } else {
            console.log(this.id)
            console.log(this.Email?.value);
            const updatedAccount: accountItem = {
                id: this.id,
                userName: String(this.UserName?.value),
                email: String(this.Email?.value),
                phoneNumber: String(this.PhoneNumber?.value),
                address: String(this.Address?.value),
                password: String(this.Password?.value),
                deleted: false,
                creatAt: new Date(),
                Status: true,
            };

            this.accountService.updateAccount(updatedAccount.id, updatedAccount).subscribe({
                next: (response) => {
                    console.log('Account updated successfully:', response);
                    alert('Account updated successfully');
                    setTimeout(() => {
                        this.router.navigate(['/Account-manage']);
                    }, 2000)
                    
                },
                error: (err) => {
                    console.error('Error updating account:', err);
                }
            });

        }
    }

}
