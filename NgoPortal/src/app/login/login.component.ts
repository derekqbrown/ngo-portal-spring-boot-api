import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public userService:UserService, public location:Location, public router:Router){}

  login(f:NgForm){
    
    let user = f.value;
    let role = user.role;
    if (role==undefined){
      role="Employee";
    }
    let data= this.userService.login(user);
    
    if (!data){
      console.log("Invalid submission");
    }else{
      data.subscribe({
        next: (user:User) =>{
          localStorage.setItem("token", ""+user.userId);
          this.userService.user = user;
          this.userService.loggedIn = true;
          // if (role != this.userService.user.role){
          //   alert("You attempted to log in as " + role + ". The role for this account is designated as " +this.userService.user.role+". If you need to change your role, please contact your supervisor.")
          // }
          if(this.userService.user.role=="Admin"){
            this.router.navigateByUrl('dashboard');
          }else{
            this.router.navigateByUrl('userDash');
          }
          
        },
        error: (err:any) =>{console.log(err)}
      })
    }
    
    
  }


}
