import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { accountItem, accountItemAdd } from "../app/shared/accountItem";

@Injectable({ providedIn: 'root' })
export class AccountService {
    constructor(private http: HttpClient) { }

    private getHeaders(): HttpHeaders {
        // Check if localStorage is available (i.e., running in the browser)
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            return new HttpHeaders({
                'Authorization': `Bearer ${token}`
            });
        }
        return new HttpHeaders(); // Return an empty headers object if localStorage is not available
    }

    getAccount(): Observable<accountItem[]> {
        return this.http.get<accountItem[]>('http://localhost:5201/api/account', { headers: this.getHeaders() });
    }

    addAccount(accountItemAdd: accountItemAdd): Observable<accountItemAdd> {
        return this.http.post<accountItemAdd>("http://localhost:5201/api/account", accountItemAdd, { headers: this.getHeaders() });
    }

    deleteAccount(id: number): Observable<accountItem> {
        return this.http.delete<accountItem>("http://localhost:5201/api/account/" + id, { headers: this.getHeaders() });
    }

    updateAccount(id: number, accountItem: accountItem): Observable<accountItem> {
        return this.http.put<accountItem>("http://localhost:5201/api/account/" + id, accountItem, { headers: this.getHeaders() });
    }
}