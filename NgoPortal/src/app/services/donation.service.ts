import { Injectable } from '@angular/core';
import { Donation } from '../model/donation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  donation!:Donation;
  donationList!:any;
  url:string = "http://localhost:8765/donation-service/donation/";
  constructor(private http:HttpClient) {  }

  getAllDonations(){
    return this.http.get(this.url+"donations");
  }
  postDonation() {
    return this.http.post(this.url+"register", this.donation);
  }
}
