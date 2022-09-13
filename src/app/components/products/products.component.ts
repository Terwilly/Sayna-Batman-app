import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  p:number = 1;
  public products : any; //
  isAdded: boolean = false;

  constructor(
    private api: ApiProductsService,
    private cartService: CartService, private router:Router ,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {

    this.api.getProducts().subscribe((res) => {
      this.products = res;
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.Prix });
      });
    });
  }
  addToCart(productItem: any) {
    this.cartService.addToCart(productItem).subscribe();
    this.router.navigateByUrl('cart');
  }

  addToWishlist(itemProduct: number){
    this.wishlistService.addToWishlist(itemProduct)
    .subscribe(()=>{
      this.isAdded = true;
    })
  }

  deleteFromWishlist(){
    this.isAdded = false;
  }
}
