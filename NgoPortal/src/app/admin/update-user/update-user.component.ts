import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  user!:User; 

  constructor(public userService:UserService, public location:Location, public router:Router){
    this.user = {
      userId: userService.tempUser.userId,
      firstName: userService.tempUser.firstName,
      lastName: userService.tempUser.lastName,
      email: userService.tempUser.email,
      password:  userService.tempUser.password,
      role: userService.tempUser.role  
    }
   }

  updateUser(){
    this.userService.tempUser = this.user;
    let data =this.userService.updateUser();
    data.subscribe({
      next: (response:any) =>{
        console.log(response);
        this.userService.getAllUsers();
        this.router.navigate(['/dashboard/userReroute']);
      },
      error: (err:any) =>{
        console.log(err);

      }
    })
  }

  cancel(){
    this.location.back();
  }
}
