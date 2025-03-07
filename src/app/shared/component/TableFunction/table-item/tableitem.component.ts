import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';

import { NgFor } from '@angular/common';
import { tableCoffe } from '../../../tableIteam';
import { TableService } from '../../../../../services/TableService';


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
    constructor(private AccountService: TableService) {
    }
    handleDeleteAccount = (id: number) => {
        this.AccountService.deleteTable(id).subscribe(( data : any) => {
            console.log(id);
            console.log(data);
            console.log(typeof (data))
            if (data == id) {
                this.tables = this.tables.filter(item => item.id !== id)
                window.location.reload();
            }
        })
    }





}
