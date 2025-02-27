import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators , ReactiveFormsModule , FormGroup } from '@angular/forms';
import { RouterLink, RouterOutlet ,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-update-component-layout',
    imports: [
        RouterLink,
      
        ReactiveFormsModule,
        NgIf,
        

    ],
    templateUrl: './ProductUpdate.component.html',
    styleUrl: './ProductUpdate.component.css',
    standalone: true,

})
export class ProductUpdateComponent {
    productUpdate = new FormGroup({
        name: new FormControl('' , Validators.required),
        detail : new FormControl('' ,Validators.required ),
        price : new FormControl('', Validators.required),
        category: new FormControl('' , Validators.required),
        image: new FormControl('' , Validators.required),
        status:new FormControl('' , Validators.required)
    })
   id = 0;
    constructor(private route : ActivatedRoute ){
        this.id = Number(route.snapshot.paramMap.get('id'));
    }

    
    getName(){
        return this.productUpdate.get('name')
    }

    getDetail(){
        return this.productUpdate.get('detail')
    }

    getPrice(){
        return this.productUpdate.get('price')

    }

    getCategory(){
        return this.productUpdate.get('category')
    }

    getImage(){
        return this.productUpdate.get('image')
    }
    getStatus(){
        return this.productUpdate.get('status')
    }

    handleUpdateProduct(){
        if(this.getName()?.hasError('required') || this.getDetail()?.hasError('required') || this.getPrice()?.hasError('required') || this.getCategory()?.hasError('required') || this.getImage()?.hasError('required') || this.getStatus()?.hasError('required')){
            return ;
        }else{
            
        }
    }

}
