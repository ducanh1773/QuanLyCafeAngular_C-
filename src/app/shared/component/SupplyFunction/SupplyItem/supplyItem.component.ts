import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';

import { NgFor } from '@angular/common';
import { SupplyItem } from '../../../supplyItem';
import { SupplyService } from '../../../../../services/SupplyService';


@Component({
    selector: 'supply-item-component-layout',
    imports: [
        RouterLink,

        NgFor,


    ],
    templateUrl: './supplyItem.component.html',
    styleUrl: './supplyItem.component.css',
    standalone: true,

})
export class SupplyItemComponent {
    @Input() supplys: SupplyItem[] = [];
    @Output() dataEvent = new EventEmitter<number>();

    constructor(private supplyService: SupplyService) {
    }

    handleDeleteSupply = (id: number) => {
        this.supplyService.deleteSupply(id).subscribe((data: any) => {
            console.log(id);
            if (data == id) {
                this.supplys = this.supplys.filter(item => item.id !== id)
                alert("Xóa thông tin đặt hàng thành công")
                window.location.reload();

            }
        })
    }

}
