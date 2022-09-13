import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  public grandTotal!: number;
  public productsCommande: any;

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((item)=>{
      this.productsCommande = item;
      this.calculTotal();

    })
  }


  calculTotal(): void{
    this.grandTotal =0;
    this.productsCommande.forEach((item:any)=>{
      this.grandTotal += item.quantity * item.Prix;
    })
  }


}
