import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  product!: any;

  constructor(private api: ApiProductsService, private route: ActivatedRoute, private router:Router, private cartService:CartService) { }

  ngOnInit(): void {
    const productId= +this.route.snapshot.params['id'];
    this.api.getProductId(productId).subscribe((res)=>{
      this.product = res;
    })
  }

  addToCart(product:any){

    this.cartService.addToCart(product);
    this.router.navigateByUrl('/cart');
  }
}
