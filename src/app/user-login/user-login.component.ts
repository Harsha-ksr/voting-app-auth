import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  loginObj: any = {
    UserName:'',
    Password: ''
  };

  incorrectPassword: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.incorrectPassword = ''
    debugger;
    localStorage.setItem('userId', this.loginObj.UserName)
    if(this.loginObj.UserName === 'admin' && this.loginObj.Password === 'demo123'){
      this.router.navigateByUrl('voting-home')
    }
    else{
      this.incorrectPassword = 'Username or Password is incorrect'
      this.router.navigateByUrl('login');
    }
    //way 1
    // if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
    //   localStorage.setItem('role','user');
    //   this.router.navigateByUrl('user-dashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
    //   localStorage.setItem('role','admin');
    //   this.router.navigateByUrl('admin-dash');
    // }
    //way 2

    // if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
    //   localStorage.setItem('role','user');
    //   this.router.navigateByUrl('way2user-dashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
    //   localStorage.setItem('role','admin');
    //   this.router.navigateByUrl('way2admin-dash');
    // }
  }

}
