import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { accountItem, accountItemAdd } from "../app/shared/accountItem";
import { HttpClientModule } from "@angular/common/http";
import { Response } from "express";
import { ResponseData } from "../app/shared/responData";
import {stockItem} from "../app/shared/stockItem"
@Injectable({ providedIn: 'root' })


export class StockService {
    constructor(private http: HttpClient) { }

    getStock(): Observable<[]> {
        return this.http
            .get<any>("http://localhost:5201/api/stock")
    }

    addStock(stockItem: stockItem): Observable<stockItem> {
        return this.http
            .post<any>("http://localhost:5201/api/stock", stockItem)

    }

    deleteStock(id: number): Observable<stockItem> {
        return this.http
            .delete<any>("http://localhost:5201/api/stock/" + id);
    }

    updateStock(id: number, tableCoffe: stockItem): Observable<stockItem> {
        return this.http
            .put<stockItem>("http://localhost:5201/api/stock/" + id, tableCoffe);
    }
}