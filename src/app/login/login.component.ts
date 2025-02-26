import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl , FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
    selector: 'login-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,

        
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone:true,

})
export class LoginComponent {
    Login = new FormGroup({
        username : new FormControl('' , Validators.required),
        password : new FormControl('' , Validators.required),
    })


    constructor(){

    }


    getUserName(){
        return this.Login.get('username');
    }

    getPassword(){
        return this.Login.get('password');
    }

    handleToLogin(){
        if(this.getUserName()?.hasError('required') || this.getPassword()?.hasError('required')){
            return
        }else{
            
        }
    }
}
