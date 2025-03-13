import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/AuthService';

@Component({
    selector: 'login-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,
    ],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
})
export class LoginComponent {
    Login = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(private authService: AuthService, private router: Router) { }

    get UserName() {
        return this.Login.get('username');
    }

    get Password() {
        return this.Login.get('password');
    }

    handleToLogin() {
        if (this.Login.invalid) {
            alert("Bạn chưa nhập tên đăng nhập hoặc mật khẩu");
            return; // Nếu form không hợp lệ, không làm gì cả
        }

        const userDto = {
            userName: this.UserName?.value ?? '', // Sử dụng '' nếu giá trị là null hoặc undefined
            password: this.Password?.value ?? '', // Sử dụng '' nếu giá trị là null hoặc undefined
        };

        this.authService.login(userDto).subscribe(
            (response) => {
                // Kiểm tra xem phản hồi có chứa token không
                if (response && response.token) {
                    alert("Đăng nhập thành công");
                    // Lưu token vào localStorage
                    localStorage.setItem("token", response.token);
                    // Lưu userId hoặc các thông tin khác nếu cần
                    localStorage.setItem("userId", response.userId); // Nếu userId có trong phản hồi

                    console.log('Token đã được lưu:', response.token);
                    // Điều hướng đến trang quản lý tài khoản
                    this.router.navigate(['/Account-manage']);
                } else {
                    // Xử lý trường hợp không có token trong phản hồi
                    alert("Đăng nhập thất bại, vui lòng thử lại.");
                }
            },
            (error) => {
                console.error('Đăng nhập thất bại:', error);
                alert("Đăng nhập thất bại: " + error.error.message); // Hiển thị thông báo lỗi
            }
        );
    }
}