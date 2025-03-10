import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { accountItem, accountItemAdd } from "../app/shared/accountItem";
import { HttpClientModule } from "@angular/common/http";
import { Response } from "express";
import { ResponseData } from "../app/shared/responData";
import { productItem, productItemAdd } from "../app/shared/productItem";
@Injectable({ providedIn: 'root' })

export class ProductService {
    constructor(private http: HttpClient) { }

    getProduct(): Observable<productItem[]> {
        return this.http
            .get<any>("http://localhost:5201/api/product")
    }

    addProduct(productItemAdd: productItemAdd): Observable<productItem> {
        return this.http.post<any>("http://localhost:5201/api/product" , productItemAdd)
    }

    deleteProduct(id: number): Observable<productItem> {
        return this.http.delete<any>("http://localhost:5201/api/product/" + id)
    }

    updateProduct(id: number, productItem: productItem): Observable<productItem> {
        return this.http.put<productItem>("http://localhost:5201/api/product/" + id, productItem)
    }
}