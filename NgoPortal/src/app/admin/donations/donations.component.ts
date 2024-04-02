import { Component } from '@angular/core';
import { DonationService } from '../../services/donation.service';
import { Donation } from '../../model/donation';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrl: './donations.component.css'
})
export class DonationsComponent {

  constructor(public donationService:DonationService){ 
    this.getDonationsList();
  }

  getDonationsList(){
    let data = this.donationService.getAllDonations();
    data.subscribe({
      next: (donations:any|Donation[]) =>{
        this.donationService.donationList = donations;
      },
      error: (err:any) =>{console.log(err)}
    })
  }

}
