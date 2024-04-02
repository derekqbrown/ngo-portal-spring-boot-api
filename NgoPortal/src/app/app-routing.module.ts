import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './admin/users/users.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { EventsComponent } from './admin/events/events.component';
import { loginGuard } from './guard/login.guard';
import { CreateEventComponent } from './admin/create-event/create-event.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PersonalDetailsComponent } from './user/personal-details/personal-details.component';
import { DonationFormComponent } from './user/donation-form/donation-form.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { ErrorComponent } from './error/error.component';
import { ThanksComponent } from './user/thanks/thanks.component';
import { DonationsComponent } from './admin/donations/donations.component';
import { UserDashComponent } from './user/user-dash/user-dash.component';
import { UserRerouteComponent } from './admin/user-reroute/user-reroute.component';
import { EventRerouteComponent } from './admin/event-reroute/event-reroute.component';
import { RerouterComponent } from './user/rerouter/rerouter.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'userDash', component:UserDashComponent, canActivate:[loginGuard]},
  {path:'personalDetails', component:PersonalDetailsComponent, canActivate:[loginGuard]},
  {path:'donationForm', component:DonationFormComponent, canActivate:[loginGuard]},
  {path:'checkout', component:CheckoutComponent, canActivate:[loginGuard]},
  {path:'thanks', component:ThanksComponent, canActivate:[loginGuard]},
  {path:'rerouter', component:RerouterComponent, canActivate:[loginGuard]},

  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[loginGuard],
    children:[
    {path:'donations', component:DonationsComponent},
    {path:'userReroute', component:UserRerouteComponent},
    {path:'users', component:UsersComponent,
      children:[
        {path:'updateUser', component:UpdateUserComponent},
        {path:'addUser', component:AddUserComponent},
        
      ]
    },
    {path:'eventReroute', component:EventRerouteComponent},
    {path:'events', component:EventsComponent,
      children:[
        {path:'createEvent', component:CreateEventComponent},
        
      ]
    },
  ]
},
  
  {path:'**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
