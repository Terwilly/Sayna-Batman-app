import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  suisConnecte: boolean = false;

  constructor( private http:HttpClient) { }

  login(){
    // this.suisConnecte = true;
    return this.http.get<any>('https://sayna-batman-api.herokuapp.com/signupUsers');
  }
}
