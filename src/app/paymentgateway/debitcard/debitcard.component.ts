import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debitcard',
  templateUrl: './debitcard.component.html',
  styleUrls: ['./debitcard.component.css']
})
export class DebitcardComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  onSubmitForm(){
    this.router.navigate(['/otp']);
  }
}
