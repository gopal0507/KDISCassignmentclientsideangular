import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  onSubmitForm(){
    this.router.navigate(['/otp']);
  }
}
