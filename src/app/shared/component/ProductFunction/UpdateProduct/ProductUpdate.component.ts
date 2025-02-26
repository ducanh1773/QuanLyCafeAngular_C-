import { Component } from '@angular/core';
import { RouterLink, RouterOutlet ,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-update-component-layout',
    imports: [
        RouterLink,
      
    ],
    templateUrl: './ProductUpdate.component.html',
    styleUrl: './ProductUpdate.component.css',
    standalone: true,

})
export class ProductUpdateComponent {
   id = 0;
    constructor(private route : ActivatedRoute ){
        this.id = Number(route.snapshot.paramMap.get('id'));
    }

}
