import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { accountItem } from "../app/shared/accountItem";
import { HttpClientModule } from "@angular/common/http";
import { Response } from "express";
@Injectable({ providedIn: 'root' })
export class AccountService{
    constructor(private http: HttpClient) { }

    getAccount():Observable<accountItem[]> {
        return this.http.get<any>('http://localhost:5201/api/account');
    }
}