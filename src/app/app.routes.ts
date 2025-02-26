import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductManageComponent } from './Product-Manager/ProductManage.component';
import { ProductCreateComponent } from './shared/component/ProductFunction/CreateProductItem/ProductCreate.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [

    { path: '', component: HomeComponent },
    // {path:'login' , component:LoginComponent}
    { path: 'ProductManage', component: ProductManageComponent },
    { path: 'create-product', component: ProductCreateComponent },
];


// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }
