import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FundItem } from "../app/shared/FundItem";

@Injectable({ providedIn: 'root' })
export class FundService {
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

    getFundList(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:5201/api/fund', { headers: this.getHeaders() });
    }


    submitFundData(data: any): Observable<any> {
        return this.http.post<any>("http://localhost:5201/api/fund", data, { headers: this.getHeaders() });
    }

    deleteFund(id: number): Observable<FundItem> {
        return this.http.delete<FundItem>("http://localhost:5201/api/fund/" + id, { headers: this.getHeaders() });
    }

    updateFund(id: number, FundItem: FundItem): Observable<FundItem> {
        return this.http.put<FundItem>("http://localhost:5201/api/fund/" + id, FundItem, { headers: this.getHeaders() });
    }
}