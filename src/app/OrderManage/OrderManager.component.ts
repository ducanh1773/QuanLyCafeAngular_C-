import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'order-component-layout',
    imports: [
        RouterLink,
        LoginComponent,
    ],
    templateUrl: './OrderManager.component.html',
    styleUrl: './OrderManager.component.css',
    standalone: true,

})
export class OrderComponent {
    
}
