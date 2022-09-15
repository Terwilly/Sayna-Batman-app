import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  addToWishlist(productId:any){
    return this.http.post('https://sayna-batman-api.herokuapp.com/wishlist', productId)
  }

  deleteFromWishlist(productId:any){
    return this.http.delete('https://sayna-batman-api.herokuapp.com/wishlist/' + productId)
  }

}
