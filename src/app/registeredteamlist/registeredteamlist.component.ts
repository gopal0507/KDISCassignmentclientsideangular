import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.services';

@Component({
  selector: 'app-registeredteamlist',
  templateUrl: './registeredteamlist.component.html',
  styleUrls: ['./registeredteamlist.component.css']
})
export class RegisteredteamlistComponent implements OnInit {
  newTeam=[];
  constructor(private serverService:ServerService) { }

  ngOnInit() {
    this.onGetTeamList();
  }
 onGetTeamList(){
  this.serverService.getTeamServer().subscribe(
    (newdata:any[])=>{console.log(newdata);
      this.newTeam=newdata;
     
    },
    (error)=> console.log(error)
  );
 }
}
