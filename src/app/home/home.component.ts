import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private slideIndex: number = 1;
  islogin:boolean=false;
  isRegistered:boolean=false;
  msgs=[];
  constructor( private Data:DataService) { }

  ngOnInit() {
    this.Data.currentMessage.subscribe(message => this.islogin = message);
    this.Data.currentRegistered.subscribe(message => this.isRegistered = message);
    if(this.isRegistered){
      this.msgs.push({severity:'success', summary:'Success', detail:'Successfully Registered'});
    }
    else{
      this.msgs=[];
    }
  }


  prevSlides() {

    if (this.slideIndex == 1) {
      this.slideIndex = 6;
    }
    else {
      this.slideIndex = this.slideIndex - 1;
    }

  }
  nextSlides() {
    
    if (this.slideIndex == 6) {
      this.slideIndex = 1;
    }
    else {
      this.slideIndex = this.slideIndex + 1;
    }
  }
  currentSlide(n: number) {
    this.slideIndex = n;
  }

}
