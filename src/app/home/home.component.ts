import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'home-component-layout',
    imports: [
        RouterLink,
        LoginComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: true,

})
export class HomeComponent {
    
}
