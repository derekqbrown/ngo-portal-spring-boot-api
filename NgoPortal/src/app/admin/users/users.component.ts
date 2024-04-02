import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  constructor(public userService:UserService, public router:Router){ 
    this.getUserList(); 
  }
  getUserList(){
    let data = this.userService.getAllUsers();
    data.subscribe({
      next: (users:any|User[]) =>{
        this.userService.userList = users;
      },
      error: (err:any) =>{console.log(err)}
    })
  }

  deleteUser(id:number){
    let data = this.userService.deleteUser(id);
    if(!data){
      console.log("Error - user could not be deleted");
      return;
    }
    data.subscribe({
      next: () =>{
        console.log("Successful deletion. Goodbye!")
        this.getUserList();
        this.router.navigate(['dashboard/userReroute']);
      },
      error: (err:any) =>{console.log(err)}
    })
    
  }
  setUser(user:User){
    this.userService.tempUser = user;
  }

}
