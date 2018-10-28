import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.services';
import { Router } from '@angular/router';
import { DataService } from '../dataservice';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {
  newData=[];
  noofseats:number;
  level:any;
  totalfee:number;
  calculate:boolean;
  fill:boolean=true;
  selectedMatch:any;
  constructor(private serverService:ServerService, private router: Router, private Data:DataService) { }

  ngOnInit() {
    this.onGetMatches();
  }
  onGetMatches(){
    this.serverService.getServer().subscribe(
      (newdata:any[])=>{console.log(newdata);
        this.newData=newdata;
      },
      (error)=> console.log(error)
    );
  }
  calculateFee()
{
  this.calculate=true;
   if(this.level=="gl"){
     this.totalfee=300 * this.noofseats;
   }
   else if(this.level=="ml"){
    this.totalfee= 500 * this.noofseats;
   }
   else if(this.level=="hl"){
    this.totalfee= 400 * this.noofseats;
   }
   else{
    this.totalfee= 1000 * this.noofseats;
   }
   this.Data.ticketFee(this.totalfee);
}
onSubmitForm(){
  alert(this.selectedMatch)
  if(this.noofseats && this.level && this.totalfee){
    this.fill=true;
  this.Data.changeNoofseats(this.noofseats);
  this.Data.ChangeLevel(this.level);
  this.router.navigate(['/paymentgateway']);
  }
  else{
    this.fill=false;
  }
  
}
}
