import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { accountItem, accountItemAdd } from "../app/shared/accountItem";
import { HttpClientModule } from "@angular/common/http";
import { Response } from "express";
import { ResponseData } from "../app/shared/responData";
import { FundItem } from "../app/shared/FundItem";
@Injectable({ providedIn: 'root' })
export class FundService {
    constructor(private http: HttpClient) { }

    getFundList(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:5201/api/fund'); // API lấy danh sách quỹ
    }

    submitFundData(data: any): Observable<any> {
        return this.http.post<any>("http://localhost:5201/api/fund", data); // Gửi dữ liệu nhập hàng lên API
    }

    deleteFund(id: number): Observable<FundItem> {
        return this.http.delete<any>("http://localhost:5201/api/fund/" + id);

    }

    updateFund(id: number, FundItem: FundItem): Observable<FundItem> {
        return this.http.put<FundItem>("http://localhost:5201/api/fund/" + id, FundItem)
    }
}