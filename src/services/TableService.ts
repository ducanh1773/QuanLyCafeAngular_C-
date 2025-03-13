import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tableCoffe, tableCoffeAdd } from "../app/shared/tableIteam";

@Injectable({ providedIn: 'root' })
export class TableService {
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

    getTable(): Observable<tableCoffe[]> {
        return this.http.get<tableCoffe[]>("http://localhost:5201/api/table", { headers: this.getHeaders() });
    }

    addTable(tableCoffe: tableCoffeAdd): Observable<tableCoffeAdd> {
        return this.http.post<any>("http://localhost:5201/api/table", tableCoffe, { headers: this.getHeaders() });
    }

    deleteTable(id: number): Observable<tableCoffe> {
        return this.http.delete<any>("http://localhost:5201/api/table/" + id, { headers: this.getHeaders() });
    }

    updateTable(id: number, tableCoffe: tableCoffe): Observable<tableCoffe> {
        return this.http.put<tableCoffe>("http://localhost:5201/api/table/" + id, tableCoffe, { headers: this.getHeaders() });
    }
}