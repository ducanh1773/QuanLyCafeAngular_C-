import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SupplyItem } from "../app/shared/supplyItem";

@Injectable({ providedIn: 'root' })
export class SupplyService {
    constructor(private http: HttpClient) { }

    private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('token');
        return new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
    }

    getSupply(): Observable<SupplyItem[]> {
        return this.http.get<any>("http://localhost:5201/api/supply", { headers: this.getHeaders() });
    }

    addSupply(SupplyItem: { UserName: string | null | undefined; stocks: { nameStock: string; quantity: number; price: number; paymentMethod: string; }[] }): Observable<any> {
        return this.http.post<any>("http://localhost:5201/api/supply", SupplyItem, { headers: this.getHeaders() });
    }

    deleteSupply(id: number): Observable<SupplyItem> {
        return this.http.delete<any>("http://localhost:5201/api/supply/" + id, { headers: this.getHeaders() });
    }

    updateSupply(id: number, SupplyItem: { UserName: string | null | undefined; stocks: { nameStock: string; quantity: number; price: number; paymentMethod: string; }[] }): Observable<SupplyItem> {
        return this.http.put<SupplyItem>("http://localhost:5201/api/supply/" + id, SupplyItem, { headers: this.getHeaders() });
    }
}