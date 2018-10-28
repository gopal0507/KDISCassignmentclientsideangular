import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.css']
})
export class PaymentgatewayComponent implements OnInit {
creditcard:boolean=false;
debitcard:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  clickonCreditcard(){
    this.creditcard=true;
    this.debitcard=false;
  }
  clickonDebitcard(){
    this.debitcard=true;
    this.creditcard=false;
  }
}
