import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DonationType } from '../../model/donation-type';
import { DonationCart } from '../../model/donation-cart';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrl: './user-dash.component.css'
})
export class UserDashComponent {

   constructor(public eventService:EventService, public location:Location, public router:Router){ 
    this.getEventList(); 
    this.eventService.cart= [];
  }
  getEventList() {
    let data = this.eventService.getAllEvents();
    data.subscribe({
      next: (eventList:any|DonationType[]) =>{
        this.eventService.eventList = eventList;
        for(let ev of eventList){
          if(ev.active){
            this.eventService.cart.push(new DonationCart(ev.title, ev.id));
          }
        }
      },
      error: (err:any) =>{console.log(err)}
    })
    
  }


}
