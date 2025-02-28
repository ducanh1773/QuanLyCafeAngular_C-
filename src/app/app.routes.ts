import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductManageComponent } from './Product-Manager/ProductManage.component';
import { ProductCreateComponent } from './shared/component/ProductFunction/CreateProductItem/ProductCreate.component';
import { NgModule } from '@angular/core';
import { ProductUpdateComponent } from './shared/component/ProductFunction/UpdateProduct/ProductUpdate.component';
import { AccountLayoutComponent } from './AccountManage/Account.component';
import { AccountCreateComponent } from './shared/component/AccountFunction/CreateAccountItem/AccountCreate.component';
import { AccountUpdateComponent } from './shared/component/AccountFunction/UpdateAccount/AccountUpdate.component';
import { StockManageComponent } from './StockManage/StockManage.component';
import { StockCreateComponent } from './shared/component/StockFunction/CreateStockItem/StockCreate.component';
import { StockUpdateComponent } from './shared/component/StockFunction/UpdateStock/StockUpdate.component';
import { ImportManageComponent } from './ImportManage/importmanage.component';
import { OrderComponent } from './OrderManage/OrderManager.component';
import { TableManageComponent } from './TableManager/TableManage.component';
import { TableCreateComponent } from './shared/component/TableFunction/TableCreate/TableCreate.component';
import { TableUpdateComponent } from './shared/component/TableFunction/TableUpdate/TableUpdate.component';
import { AddProductComponent } from './shared/component/OrderFunction/AddProductItemToTable/addProduct.component';
export const routes: Routes = [

    { path: '', component: HomeComponent },
    // {path:'login' , component:LoginComponent}
    { path: 'ProductManage', component: ProductManageComponent },
    { path: 'create-product', component: ProductCreateComponent },
    { path: 'update-product/:id', component: ProductUpdateComponent },
    { path: 'Account-manage', component: AccountLayoutComponent },
    { path: 'account-create', component: AccountCreateComponent },
    { path: 'account-update/:id', component: AccountUpdateComponent },
    { path: 'stock-manage', component: StockManageComponent },
    { path: 'stock-create', component: StockCreateComponent },
    { path: 'stock-update/:id', component: StockUpdateComponent },
    { path: 'import-manage', component: ImportManageComponent },
    { path: 'order-manage', component: OrderComponent },
    { path: 'table-manage', component: TableManageComponent },
    { path: 'table-create', component: TableCreateComponent },
    { path: 'table-update/:id', component: TableUpdateComponent },
    { path: 'order-update-on-table/:id', component: AddProductComponent },
];


// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }
