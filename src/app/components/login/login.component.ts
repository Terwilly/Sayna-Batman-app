import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router, private http:HttpClient, private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password:['']
    });
  }
  login(){

    this.authService.login().subscribe((res)=>{
      const utilisateur = res.find((ans:any)=>{
        return ans.email === this.loginForm.value.email && ans.password === this.loginForm.value.password;
      });

      if(utilisateur){
        alert('Vous etes connecte');
        this.loginForm.reset();
        //suisconnecte = true;
        this.authService.suisConnecte = true;
        this.router.navigateByUrl('/cart/commande');
      }
      else{
        alert('Veuillez enregistre');
      }
    })
  }

}
