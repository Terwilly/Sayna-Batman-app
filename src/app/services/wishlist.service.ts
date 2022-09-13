import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  addToWishlist(productId:any){
    return this.http.post('http://localhost:3000/wishlist', productId)
  }

  deleteFromWishlist(productId:any){
    return this.http.delete('http://localhost:3000/wishlist/' + productId)
  }

}
