import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';
@Component({
    selector: 'product-create-component-layout',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        NgIf,

        
       
       
    ],
    templateUrl: './ProductCreate.component.html',
    styleUrl: './ProductCreate.component.css',
    standalone: true,

})
export class ProductCreateComponent {
        product = new FormGroup({
            name : new FormControl('' , Validators.required),
            detail:new FormControl('' , Validators.required),
            price:new FormControl('' ,Validators.required),
            category:new FormControl('' ,Validators.required),
            image:new FormControl('' ,Validators.required),
            status:new FormControl('' , Validators.required)
        })

        constructor(){

        }

        getName(){
            return this.product.get('name')
        }

        getDetail(){
            return this.product.get('detail')
        }

        getPrice(){
            return this.product.get('price')

        }

        getCategory(){
            return this.product.get('category')
        }

        getImage(){
            return this.product.get('image')
        }
        getStatus(){
            return this.product.get('status')
        }

        handleCreateProduct(){
            if(this.getName()?.hasError('required') || this.getDetail()?.hasError('required') || this.getPrice()?.hasError('required') || this.getCategory()?.hasError('required') || this.getImage()?.hasError('required') || this.getStatus()?.hasError('required')){
                return ;
            }else{
                
            }
        }

}
