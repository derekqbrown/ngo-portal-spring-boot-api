import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './user/home/home.component';
import { PersonalDetailsComponent } from './user/personal-details/personal-details.component';
import { DonationFormComponent } from './user/donation-form/donation-form.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { UsersComponent } from './admin/users/users.component';
import { DonationsComponent } from './admin/donations/donations.component';
import { EventsComponent } from './admin/events/events.component';
import { CreateEventComponent } from './admin/create-event/create-event.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ThanksComponent } from './user/thanks/thanks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserDashComponent } from './user/user-dash/user-dash.component';
import { DateFormatPipe } from './date-format.pipe';
import { UserRerouteComponent } from './admin/user-reroute/user-reroute.component';
import { EventRerouteComponent } from './admin/event-reroute/event-reroute.component';
import { RerouterComponent } from './user/rerouter/rerouter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PersonalDetailsComponent,
    DonationFormComponent,
    CheckoutComponent,
    UsersComponent,
    DonationsComponent,
    EventsComponent,
    CreateEventComponent,
    AddUserComponent,
    UpdateUserComponent,
    ErrorComponent,
    DashboardComponent,
    ThanksComponent,
    UserDashComponent,
    DateFormatPipe,
    UserRerouteComponent,
    EventRerouteComponent,
    RerouterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
