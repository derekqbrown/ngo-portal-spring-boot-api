import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { UserDashComponent } from '../../user/user-dash/user-dash.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  tempUser!:User;

  constructor(public userService:UserService, public location:Location, public router:Router){
    this.tempUser = new User();
   }

  postUser(){
    this.userService.tempUser = this.tempUser;
    let data =this.userService.postUser();
    data.subscribe({
      next: (id:any) =>{
        if(id==null || id ==undefined){
          alert("Error - could not add user");
        }
        this.userService.userList.push(this.userService.tempUser);
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
