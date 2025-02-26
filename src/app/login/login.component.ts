import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'login-component-layout',
    imports: [
        RouterLink
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone:true,

})
export class LoginComponent {
    
}
