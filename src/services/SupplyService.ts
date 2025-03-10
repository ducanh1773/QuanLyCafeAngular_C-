import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { accountItem, accountItemAdd } from "../app/shared/accountItem";
import { HttpClientModule } from "@angular/common/http";
import { Response } from "express";
import { ResponseData } from "../app/shared/responData";
import { StockAdd, stockItem } from "../app/shared/stockItem"
import { SupplyItem } from "../app/shared/supplyItem";
@Injectable({ providedIn: 'root' })



export class SupplyService {
    constructor(private http: HttpClient) { }

    getSupply(): Observable<SupplyItem[]> {
        return this.http.get<any>("http://localhost:5201/api/supply")
    }

    addSupply(SupplyItem: SupplyItem): Observable<SupplyItem> {
        return this.http.post<any>("http://localhost:5201/api/stock", SupplyItem)
    }

    deleteSupply(id: number): Observable<SupplyItem> {
        return this.http.delete<any>("http://localhost:5201/api/stock")
    }

    updateSupply(id: number, SupplyItem: SupplyItem) {
        return this.http.put<SupplyItem>("http://localhost:5201/api/stock/" + id, SupplyItem)
    }
}