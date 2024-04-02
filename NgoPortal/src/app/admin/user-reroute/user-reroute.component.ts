import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reroute',
  templateUrl: './user-reroute.component.html',
  styleUrl: './user-reroute.component.css'
})
export class UserRerouteComponent implements OnInit {
  
  constructor(public router:Router){ 
    
  }

  async ngOnInit(){
    //setTimeout(() =>{this.reload();}, 200);
    this.router.navigate(['/dashboard/users']);
  }
  
}

