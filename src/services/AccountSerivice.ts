import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { accountItem, accountItemAdd } from "../app/shared/accountItem";
import { HttpClientModule } from "@angular/common/http";
import { Response } from "express";
import { ResponseData } from "../app/shared/responData";
@Injectable({ providedIn: 'root' })
export class AccountService {
    constructor(private http: HttpClient) { }

    getAccount(): Observable<accountItem[]> {
        return this.http.get<any>('http://localhost:5201/api/account');
    }

    addAccount(accountItemAdd: accountItemAdd): Observable<accountItemAdd> {
        return this.http
            .post<any>("http://localhost:5201/api/account", accountItemAdd)
    }

    deleteAccount(id: number): Observable<accountItem> {
        return this.http
            .delete<any>("http://localhost:5201/api/account/" + id)


    }
    updateAccount(id: number , accountItem : accountItem): Observable<accountItem> {
        return this.http
                .put<accountItem>("http://localhost:5201/api/account/" + id ,accountItem )
    }
}