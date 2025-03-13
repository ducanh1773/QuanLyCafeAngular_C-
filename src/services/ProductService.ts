import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { accountItem, accountItemAdd } from "../app/shared/accountItem";
import { ResponseData } from "../app/shared/responData";
import { productItem, productItemAdd } from "../app/shared/productItem";

@Injectable({ providedIn: 'root' })
export class ProductService {
    private token: string | null = null; // Biến để lưu token

    constructor(private http: HttpClient) { }

    // Phương thức để thiết lập token
    setToken(token: string): void {
        this.token = token;
    }

    // Phương thức để lấy header với token
    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Authorization': `Bearer ${this.token}`
        });
    }

    getProduct(): Observable<productItem[]> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.get<productItem[]>("http://localhost:5201/api/product", { headers });
    }

    addProduct(productItemAdd: productItemAdd): Observable<productItem> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return this.http.post<productItem>("http://localhost:5201/api/product", productItemAdd, { headers: this.getHeaders() });
    }

    deleteProduct(id: number): Observable<productItem> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return this.http.delete<productItem>("http://localhost:5201/api/product/" + id, { headers: this.getHeaders() });
    }

    updateProduct(id: number, productItem: productItem): Observable<productItem> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return this.http.put<productItem>("http://localhost:5201/api/product/" + id, productItem, { headers: this.getHeaders() });
    }
}