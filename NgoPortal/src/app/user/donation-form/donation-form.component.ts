import { Component } from '@angular/core';
import { DonationService } from '../../services/donation.service';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Donation } from '../../model/donation';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrl: './donation-form.component.css'
})
export class DonationFormComponent {
  constructor(public donationService:DonationService, public eventService:EventService, public router:Router){}

   continue(){
    this.router.navigateByUrl("/checkout");
   }

   cancel(){
    this.donationService.donation = new Donation();
    this.router.navigateByUrl("/userDash");
   }
}
