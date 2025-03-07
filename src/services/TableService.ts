import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { accountItem, accountItemAdd } from "../app/shared/accountItem";
import { HttpClientModule } from "@angular/common/http";
import { Response } from "express";
import { ResponseData } from "../app/shared/responData";
import { productItem } from "../app/shared/productItem";
import { tableCoffe, tableCoffeAdd } from "../app/shared/tableIteam";
@Injectable({ providedIn: 'root' })


export class TableService {
    constructor(private http: HttpClient) { }

    getTable(): Observable<tableCoffe[]> {
        return this.http
            .get<any>("http://localhost:5201/api/table")
    }

    addTable(tableCoffe: tableCoffeAdd): Observable<tableCoffeAdd> {
        return this.http
            .post<any>("http://localhost:5201/api/table", tableCoffe)

    }

    deleteTable(id: number): Observable<tableCoffe> {
        return this.http
            .delete<any>("http://localhost:5201/api/table/" + id);
    }

    updateTable(id: number, tableCoffe: tableCoffe): Observable<tableCoffe> {
        return this.http
            .put<tableCoffe>("http://localhost:5201/api/table/" + id, tableCoffe);
    }
}