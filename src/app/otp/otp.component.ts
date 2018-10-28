import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../dataservice';
import { TicketBookedUserViewModel } from '../Model/ticketbookeduserdetails.component.view-model';
import { ServerService } from '../server.services';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  cancel:boolean=false;
  fee:number;
  seats:number;
  level:string;
  username:string;
  ticketList:TicketBookedUserViewModel;
  constructor(private router: Router, private Data:DataService,private serverService:ServerService) { }

  ngOnInit() {
    this.Data.currentFee.subscribe(message => this.fee = message);
    this.Data.currentSeats.subscribe(message => this.seats = message);
    this.Data.currentLevel.subscribe(message => this.level = message);
    this.Data.currentUsername.subscribe(message => this.username = message);
  
  }
  onSubmitForm(){
    this.ticketList={_id:null,username:null,noOfSeats:null,totalAmount:null,level:null,paymentStatus:null}
    this.ticketList.username=this.username;
    this.ticketList.noOfSeats=this.seats;
    this.ticketList.level=this.level;
    this.ticketList.totalAmount=this.fee;
    this.ticketList.paymentStatus="True";
    this.serverService.ticketUsers(this.ticketList).
    subscribe(res => {
      console.log("updated");
      this.router.navigate(['/paymentsuccessfull']);

  });
    
  }
  onCancel(){
    this.cancel=true;
  }
}
