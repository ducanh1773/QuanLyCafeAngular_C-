import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { accountItem, accountItemAdd } from "../app/shared/accountItem";
import { HttpClientModule } from "@angular/common/http";
import { Response } from "express";
import { ResponseData } from "../app/shared/responData";
import { StockAdd, stockItem } from "../app/shared/stockItem"
@Injectable({ providedIn: 'root' })


export class StockService {
    constructor(private http: HttpClient) { }

    getStock(): Observable<[]> {
        return this.http
            .get<any>("http://localhost:5201/api/stock")
    }

    addStock(stockItem: StockAdd): Observable<StockAdd> {
        return this.http
            .post<StockAdd>("http://localhost:5201/api/stock", stockItem)

    }

    deleteStock(id: number): Observable<stockItem> {
        return this.http
            .delete<any>("http://localhost:5201/api/stock/" + id);
    }

    updateStock(id: number, StockAdd: StockAdd): Observable<StockAdd> {
        return this.http
            .put<StockAdd>("http://localhost:5201/api/stock/" + id, StockAdd);
    }
}