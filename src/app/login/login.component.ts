import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../server.services';
import { UsersViewModel } from '../Model/user.component.view-model';
import { Router } from '@angular/router';
import { DataService } from '../dataservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:any;
password:any;
enable:boolean=true;
blank:boolean=true;
valid:boolean=true;
blanks:boolean=true;
what:boolean;
@Output() messageEvent=new EventEmitter<boolean>();

newData=[];
msgs=[];
  constructor(private serverService:ServerService,private router: Router, private Data:DataService) { }

  ngOnInit() {
    this.onGetRegisteredUsers();
    this.Data.currentMessage.subscribe(message => this.enable = message)
    this.Data.currentAdmin.subscribe(message => this.what = message)
  }
  onGetRegisteredUsers(){
    this.serverService.getRegistered().subscribe(
      (newdata:any[])=>{console.log(newdata);
        this.newData=newdata;
      },
      (error)=> console.log(error)
    );
  }
  onLogin(){
    this.valid=true;
    for(let i=0;i<this.newData.length;i++){
      if((this.username==this.newData[i].username) && (this.password==this.newData[i].password)){
        this.valid=true;
        this.isAdmin(this.newData[i].type);
        this.Data.changeMessage(true);
        this.Data.ChangeUsername(this.newData[i].username);
        this.msgs.push({severity:'success', summary:'Success', detail:'Successfully LoggedIn'});
        this.Data.changeGrowllogin(this.msgs);
        this.router.navigate(['/']);
        // this.router.navigate(['/'],{queryParams: {Enable: this.enable}});
        break;
      }
      else{
        this.valid=false;
        }
      }
      
    }
   isAdmin(isadmin){
      if(isadmin==="admin"){
        this.Data.changeAdmin(true);
      }
      else{
        this.Data.changeAdmin(false);
      }
   }
  }

