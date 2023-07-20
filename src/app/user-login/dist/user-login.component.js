"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserLoginComponent = void 0;
var core_1 = require("@angular/core");
var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(router) {
        this.router = router;
        this.loginObj = {
            UserName: '',
            Password: ''
        };
        this.incorrectPassword = '';
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.prototype.onLogin = function () {
        this.incorrectPassword = '';
        debugger;
        localStorage.setItem('userId', this.loginObj.UserName);
        if (this.loginObj.UserName === 'admin' && this.loginObj.Password === 'demo123') {
            this.router.navigateByUrl('voting-home');
        }
        else {
            this.incorrectPassword = 'Username or Password is incorrect';
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
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-user-login',
            templateUrl: './user-login.component.html',
            styleUrls: ['./user-login.component.css']
        })
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;
