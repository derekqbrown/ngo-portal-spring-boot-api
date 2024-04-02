import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NgoPortal';

  constructor(public userService:UserService){
    
   }

  ngOnInit(){
  localStorage.clear();
  }
  update(){
    location.reload();
  }

  logout(){
    this.userService.logout();
    
    }
}
