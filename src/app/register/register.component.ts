import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{NgForm} from '@angular/forms';
import { ServerService } from '../server.services';
import { UsersViewModel } from '../Model/user.component.view-model';
import { Router } from '@angular/router';
import { DataService } from '../dataservice';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:any;
  type:any;
  password:any;
  address:any;
  mobile:any;
  msgs=[];
  
  private users:UsersViewModel;
  @Output() MessageEvent= new EventEmitter<string>();
  constructor(private serverService:ServerService, private router: Router, private Data:DataService) { }

  ngOnInit() {
  }
  onSubmitForm(){
    
    this.users={_id:null,username:null,password:null,address:null,mobile:null,type:null};
    this.users.username=this.username;
    this.users.password=this.password;
    this.users.address=this.address;
    this.users.mobile=this.mobile;
    this.users.type=this.type;
    this.serverService.registerUsers(this.users).
    subscribe(res => {
      console.log("updated");
      this.Data.changeRegistered(true);
      this.router.navigate(['/']);

  });

  }
}
