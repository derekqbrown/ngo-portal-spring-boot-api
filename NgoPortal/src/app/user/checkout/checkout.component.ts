import { Component } from '@angular/core';
import { DonationService } from '../../services/donation.service';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { Donation } from '../../model/donation';
import { DonationCart } from '../../model/donation-cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  total!:number;

  constructor(public donationService:DonationService, public eventService:EventService, public router:Router){
    this.getTotal();
  }
  getTotal(){
    let total=0;
    for(let ev of this.eventService.cart){
      
      if(ev.amount && ev.amount > 0){
        total= 1*total + 1*ev.amount;
      }
      
    }
    this.total = total;
  }

  empty(){
    this.eventService.cart = [];
    for(let ev of this.eventService.eventList){
      this.eventService.cart.push(new DonationCart(ev.title, ev.id));
    }
    this.router.navigate(['/rerouter']);
  }
  remove(ev:any){
    const index = this.eventService.cart.findIndex(e=>e.eventId===ev.eventId);
    if(index > -1){
      this.eventService.cart[index].amount=0;
      //console.log("Removed item");

    }
    this.router.navigate(['/rerouter']);
  }

  checkout(){
    
    for(let ev of this.eventService.cart){
      if(ev.amount && ev.amount > 0){
        this.donationService.donation.eventName =ev.eventName;
        this.donationService.donation.eventId =ev.eventId;
        this.donationService.donation.amount =ev.amount;
        this.donationService.donation.donationDate = new Date();
        let data =this.donationService.postDonation();
        data.subscribe({
          next: () =>{
            console.log("Successful transaction")
          },
          error: (err:any) =>{
            console.log(err);
          }
        })
      }
      
    }
    //send email
    this.router.navigateByUrl("/thanks");
  }

  cancel(){
    for(let ev of this.eventService.cart){
      ev.amount=0;
    }
    this.donationService.donation = new Donation();
    this.router.navigateByUrl("/userDash");
  }
}
