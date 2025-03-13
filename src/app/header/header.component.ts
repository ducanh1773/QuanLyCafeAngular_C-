import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'header-layout',
    imports: [
        RouterLink,
        NgIf,

    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: true,

})
export class HeaderLayoutComponent {
    constructor(private router: Router) {
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token'); // Check if token exists
    }

    logout(): void {
        localStorage.removeItem('token'); // Clear the token
        this.router.navigate(['/']); // Navigate to the login page
    }
}