import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { DonationType } from '../../model/donation-type';
import { Location } from '@angular/common';
import { DonationCart } from '../../model/donation-cart';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  
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
          this.eventService.cart.push(new DonationCart(ev.title, ev.id))
        }
      },
      error: (err:any) =>{console.log(err)}
    })
    
  }
  updateEvent(event:DonationType){
    this.eventService.event1 = event;
    console.log(event.title);
    let data = this.eventService.updateEvent();
    data.subscribe({
      next: () =>{       
        console.log("Success!");
        this.router.navigate(['/dashboard/eventReroute']);
      },
      error: (err:any) =>{console.log(err)}
    }) 
    
  }
  deleteEvent(id:number){
    let data = this.eventService.deleteEvent(id);
    if (!data){
      console.log("Unable to delete event");
      return;
    }
    data.subscribe({
      next: () =>{
        this.router.navigate(['/dashboard/eventReroute']);
      },
      error: (err:any) =>{console.log(err)}
    }) 
  }

}
