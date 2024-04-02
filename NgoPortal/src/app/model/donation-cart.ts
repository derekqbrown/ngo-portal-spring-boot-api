
export class DonationCart {
    constructor(eventName:string, eventId:number){
        this.eventName=eventName;
        this.eventId = eventId;
        this.recurring = false;
        this.amount = 0;
    }
    eventName?: string | null | undefined;
    eventId?: number | null |undefined;
    recurring:boolean | null | undefined;
    amount: number | null | undefined;
  }