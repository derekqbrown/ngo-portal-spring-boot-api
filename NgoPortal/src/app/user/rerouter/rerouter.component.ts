import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rerouter',
  templateUrl: './rerouter.component.html',
  styleUrl: './rerouter.component.css'
})
export class RerouterComponent {
  constructor(public router:Router){ 
    
  }

  async ngOnInit(){
    //setTimeout(() =>{this.reload();}, 200);
    this.router.navigate(['/checkout']);
  }
}
