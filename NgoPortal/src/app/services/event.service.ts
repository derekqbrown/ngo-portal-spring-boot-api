import { Injectable } from '@angular/core';
import { DonationType } from '../model/donation-type';
import { HttpClient } from '@angular/common/http';
import { DonationCart } from '../model/donation-cart';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventList:any;
  event1!:DonationType|any;

  cart!:DonationCart [];

  url:string = "http://localhost:8765/event-service/event/";
  
  constructor(private http:HttpClient) {
   }

  getAllEvents() {
    return this.http.get(this.url +"events");
  }

  postEvent() {
    return this.http.post(this.url +"register", this.event1);
  }
  
  updateEvent(){
    return this.http.put(this.url +"update", this.event1);
  }
  deleteEvent(id:number){
    if(window.confirm("Delete this event? This cannot be undone!")){
      let url = this.url +"delete/" + id;
      return this.http.delete(url);
    }
    return null;
  }

}
