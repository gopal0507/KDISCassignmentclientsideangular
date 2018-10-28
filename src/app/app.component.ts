import { Component,ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { RegisterComponent } from './register/register.component'
import { ActivatedRoute } from '@angular/router';
import { DataService } from './dataservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
 
  
  title = 'SOCCER MANAGER';
  message:any;
  logintype:any;
  dis:boolean=false;
  islogin:boolean;
  state:any;
  code:boolean;
  userRole:string;
  username:string;
  msgs=[];
  constructor( private route: ActivatedRoute, private Data:DataService){

  }
  ngOnInit() {
    this.Data.currentMessage.subscribe(message => this.islogin = message)
    this.Data.currentGrowllogin.subscribe(message=>this.msgs=message);
    this.Data.currentUsername.subscribe(message => this.username = message);
    // this.route
    //     .queryParams
    //     .subscribe(params => {
    //         this.code = params['Enable'];
            
    //     });
    
  }
  // ChangeofRoutes($event){
      
  //    this.dis=this.code;
  // }
  backToLogin(){
   
    this.Data.changeMessage(false);
  }

}
