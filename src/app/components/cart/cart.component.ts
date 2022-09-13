import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal =0;
      this.products.forEach((item:any)=>{
        this.grandTotal += item.quantity * item.Prix;
      })
    });
  }

  removeItem(productId: any) {
    if (confirm('Es tu sure de supprimer ce produit'))
      this.cartService.removeCartItem(productId).subscribe(()=>{
        alert('Suppression avec Brio');
        window.location.reload();
      });
  }
}
