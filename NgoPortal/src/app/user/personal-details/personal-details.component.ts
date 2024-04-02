import { Component } from '@angular/core';
import { DonationService } from '../../services/donation.service';
import { Donation } from '../../model/donation';
import { UserService } from '../../services/user.service';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css'
})
export class PersonalDetailsComponent {

  constructor(public donationService:DonationService, public userService:UserService, public router:Router){
    donationService.donation = new Donation();
    donationService.donation.userId = userService.user.userId;

   }

   continue(){
    this.router.navigateByUrl("/donationForm");
   }

   cancel(){
    this.donationService.donation = new Donation();
    this.router.navigateByUrl("/userDash");
   }

  }
