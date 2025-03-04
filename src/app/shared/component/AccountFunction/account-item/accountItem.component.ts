import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';

import { NgFor } from '@angular/common';
import { accountItem } from '../../../accountItem';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'account-item-component-layout',
    imports: [
        RouterLink,
        NgFor,
        HttpClientModule,


    ],
    templateUrl: './accountItem.component.html',
    styleUrl: './accountItem.component.css',
    standalone: true,

})
export class AccountItemComponent {
    @Input() accounts: accountItem[] = [];
    @Output() dataEvent = new EventEmitter<number>();





}
