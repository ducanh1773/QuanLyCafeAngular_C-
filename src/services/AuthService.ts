import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = ''; // Địa chỉ API của bạn

    constructor(private http: HttpClient) { }

    login(userDto: { userName: string; password: string }): Observable<any> {
        // Kiểm tra xem token đã tồn tại trong session storage chưa
        const existingToken = sessionStorage.getItem('token');

        if (existingToken) {
            return new Observable(observer => {
                observer.next(existingToken);
                observer.complete();
            });
        }

        // Nếu chưa có token, thực hiện đăng nhập
        return this.http.post<any>("http://localhost:5201/api/auth/login", userDto);
    }

    saveToken(token: string): void {
        sessionStorage.setItem('token', token);
    }


}