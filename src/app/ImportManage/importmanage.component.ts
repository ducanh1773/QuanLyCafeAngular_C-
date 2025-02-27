import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'home-component-layout',
    imports: [
        RouterLink,
        LoginComponent,
        NgIf
    ],
    templateUrl: 'importmanage.component.html',
    styleUrl: 'importmanage.component.css',
    standalone: true,

})
export class ImportManageComponent {
    
}
