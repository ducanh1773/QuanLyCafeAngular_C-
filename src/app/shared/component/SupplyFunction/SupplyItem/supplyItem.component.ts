import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';

import { NgFor } from '@angular/common';
import { SupplyItem } from '../../../supplyItem';


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





}
