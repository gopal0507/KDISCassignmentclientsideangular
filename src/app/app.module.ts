import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { ServerService } from './server.services';
import { DataService } from './dataservice';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { AutoCompleteModule } from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { BlockUIModule } from 'primeng/primeng';
import {MatAutocompleteModule, MatInputModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamregistrationComponent } from './teamregistration/teamregistration.component';
import { RegisteredteamlistComponent } from './registeredteamlist/registeredteamlist.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { CreditcardComponent } from './paymentgateway/creditcard/creditcard.component';
import { DebitcardComponent } from './paymentgateway/debitcard/debitcard.component';
import { OtpComponent } from './otp/otp.component';
import { PaymentsuccessfullComponent } from './paymentsuccessfull/paymentsuccessfull.component';
import { GrowlModule } from 'primeng/growl';
import { customValidator } from './Shared/customvalidator.directive';


const appRoutes:Routes=[
  {path:'',component:HomeComponent} ,
  {path:'matches',component:MatchesComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'teamregistration',component:TeamregistrationComponent},
  {path:'registeredteams',component:RegisteredteamlistComponent},
  {path:'ticketbooking',component:TicketbookingComponent},
  {path:'paymentgateway',component:PaymentgatewayComponent},
  {path:'otp',component:OtpComponent},
  {path:'paymentsuccessfull',component:PaymentsuccessfullComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchesComponent,
    LoginComponent,
    RegisterComponent,
    customValidator,
    TeamregistrationComponent,
    RegisteredteamlistComponent,
    TicketbookingComponent,
    PaymentgatewayComponent,
    CreditcardComponent,
    DebitcardComponent,
    OtpComponent,
    PaymentsuccessfullComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AutoCompleteModule,
    FormsModule,
    GrowlModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    BlockUIModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
