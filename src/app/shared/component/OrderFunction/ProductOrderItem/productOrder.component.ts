import { Component, Input, Output ,EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { productItem } from '../../../productItem';


@Component({
    selector: 'product-order-item-component-layout',
    imports: [
        RouterLink,
    
        NgFor,

    ],
    templateUrl: './productOrder.component.html',
    styleUrl: './productOrder.component.css',
    standalone: true,

})
export class productOrdertItemComponent {
    @Input() products: productItem[] = [];
    @Output() dataEvent = new EventEmitter<number>();
    


}
