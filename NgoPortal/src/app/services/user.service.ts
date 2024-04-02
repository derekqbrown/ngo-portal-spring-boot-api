import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userList:any;
  user!:User|any; // this will store the current user once logged in.
  tempUser!:User|any; // this is a temporary user for forms
  loggedIn!: boolean;

  url:string = "http://localhost:8765/user-service/user/";
  
  constructor(private http:HttpClient, private router:Router) { }

  getAllUsers() {
    return this.http.get(this.url +"users");
  }

  login(user:User){
    this.user = user;
    return this.http.post(this.url +"login", this.user);
  
  }
  postUser() {
    return this.http.post(this.url +"register", this.tempUser);
  }
  
  updateUser(){
    return this.http.put(this.url +"update", this.tempUser);
  }
  deleteUser(id:number){
    if(window.confirm("Delete User? This cannot be undone!")){
      let url = this.url +"delete/" + id;
      return this.http.delete(url);
    }
    return null;
  }


  logout(){
    localStorage.clear();
    this.router.navigate(["/home"]);
    this.loggedIn = false;
    location.reload();
  }
}
