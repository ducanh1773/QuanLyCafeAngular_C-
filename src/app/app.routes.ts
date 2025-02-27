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
export const routes: Routes = [

    { path: '', component: HomeComponent },
    // {path:'login' , component:LoginComponent}
    { path: 'ProductManage', component: ProductManageComponent },
    { path: 'create-product', component: ProductCreateComponent },
    { path: 'update-product/:id', component: ProductUpdateComponent },
    { path: 'Account-manage', component: AccountLayoutComponent },
    { path: 'account-create', component: AccountCreateComponent },
    { path: 'account-update/:id', component: AccountUpdateComponent },
];


// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }
