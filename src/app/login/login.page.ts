import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  errorMsg: string;
  errorCode:string;
  loggedin=false;

  google={
    email:'',
  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  
   
  }

  signUp() {
    
    const email = this.email;
    const password = this.password;
    this.authService.signUp(email, password)
    
    .catch(error =>{
      this.errorMsg = error.message;
      this.errorCode = error.code;


      
    });
    
     }
  login() {

    this.authService.login(this.email, this.password)
    .catch(error => this.errorMsg = error.message);


  }
  loginWithGoogle(){
    this.authService.lwg().catch(error => this.errorMsg = error.message);
    this.loggedin=true;
    

  }
}
