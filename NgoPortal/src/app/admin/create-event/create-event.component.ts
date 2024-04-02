import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DonationType } from '../../model/donation-type';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
  
  constructor(public eventService:EventService, public location:Location, public router:Router){ 
    eventService.event1 = new DonationType();
  }

  createEvent(){
    this.eventService.event1.active=true;

    if (this.eventService.event1.title == null){
      console.log("A required field was left blank.")
      return;
    }
    
    let data =this.eventService.postEvent();

    if(!data){
      console.log("Error - event could not be created.")
      return;
    }
    data.subscribe({
      next: () =>{
        console.log("Successfully created event")
      },
      error: (err:any) =>{console.log(err)}
    })
    this.router.navigate(['/dashboard/eventReroute']);
  }

  cancel(){
    this.location.back();
  }
}
