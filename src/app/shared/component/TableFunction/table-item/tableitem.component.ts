import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';

import { NgFor } from '@angular/common';
import { tableCoffe } from '../../../tableIteam';


@Component({
    selector: 'table-item-component-layout',
    imports: [
        RouterLink,

        NgFor,


    ],
    templateUrl: './tableitem.component.html',
    styleUrl: './tableitem.component.css',
    standalone: true,

})
export class TableItemComponent {
    @Input() tables: tableCoffe[] = [];
    @Output() dataEvent = new EventEmitter<number>();






}
