import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterLink, RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../../../services/AccountSerivice';
import { accountItem, accountItemAdd } from '../../../accountItem';
import { FundItem } from '../../../FundItem';
import { FundService } from '../../../../../services/FundsService';
import { response } from 'express';

@Component({
    selector: 'fund-update-component-layout',
    imports: [
        RouterLink,

        ReactiveFormsModule,
        NgIf,


    ],
    templateUrl: 'FundUpdate.component.html',
    styleUrl: 'FundUpdate.component.css',
    standalone: true,

})
export class FundUpdateComponent {

    id = 0;
    constructor(private fundService: FundService, private router: Router, private route: ActivatedRoute) {
        this.id = Number(route.snapshot.paramMap.get('id'))
    }

    fundAdd = new FormGroup({
        FundName: new FormControl('', Validators.required),
        SumPrice: new FormControl('', Validators.required),
        detail_status: new FormControl('', Validators.required),
        creat_at: new FormControl('', Validators.required),
    })

    get FundName() {

        return this.fundAdd.get('FundName')
    }

    get SumPrice() {
        return this.fundAdd.get("SumPrice")
    }

    get detailStatus() {
        return this.fundAdd.get("detail_status")
    }
    get createAt() {
        return this.fundAdd.get("create_at")
    }


    handleUpdateAccount() {
        if (this.FundName?.hasError('required') || this.SumPrice?.hasError('required') || this.detailStatus?.hasError('required') || this.createAt?.hasError('required')) {
            return;
        } else {

            const updateFund: FundItem = {
                id: this.id,
                fundName: String(this.FundName?.value),
                SumPrice: Number(this.SumPrice?.value),
                detail_status: String(this.detailStatus?.value),
                creat_at: new Date()

            };
    

            this.fundService.updateFund(updateFund.id, updateFund).subscribe({
                next: (response) => {
                    console.log('Qũy đã được cập nhật thành công:', response);
                    alert('Quỹ được cập nhật thành công');
                    setTimeout(() => {
                        this.router.navigate(['/fund-manage']);
                    }, 2000)
                   


                },
                error: (err) => {
                    console.error('Error updating account:', err);
                }
            });

        }
    }

}
