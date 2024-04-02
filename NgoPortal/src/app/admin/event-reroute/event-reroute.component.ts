import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-reroute',
  templateUrl: './event-reroute.component.html',
  styleUrl: './event-reroute.component.css'
})
export class EventRerouteComponent {

  constructor(public router:Router){ 
    
  }

  async ngOnInit(){
    //setTimeout(() =>{this.reload();}, 500); //add 'async' to method declaration if using this
    this.router.navigate(['/dashboard/events']);
  }
  
}
