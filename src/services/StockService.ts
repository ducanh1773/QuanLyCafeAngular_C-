import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StockAdd, stockItem } from "../app/shared/stockItem";

@Injectable({ providedIn: 'root' })
export class StockService {
    constructor(private http: HttpClient) { }

    private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('token');
        return new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
    }

    getStock(): Observable<[]> {
        return this.http.get<any>("http://localhost:5201/api/stock", { headers: this.getHeaders() });
    }

    addStock(stockItem: StockAdd): Observable<StockAdd> {
        return this.http.post<StockAdd>("http://localhost:5201/api/stock", stockItem, { headers: this.getHeaders() });
    }

    deleteStock(id: number): Observable<stockItem> {
        return this.http.delete<any>("http://localhost:5201/api/stock/" + id, { headers: this.getHeaders() });
    }

    updateStock(id: number, StockAdd: StockAdd): Observable<StockAdd> {
        return this.http.put<StockAdd>("http://localhost:5201/api/stock/" + id, StockAdd, { headers: this.getHeaders() });
    }
}