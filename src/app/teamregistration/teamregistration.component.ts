import { Component, OnInit } from '@angular/core';
import { TeamsViewModel } from '../Model/teams.component.view-model';
import { ServerService } from '../server.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teamregistration',
  templateUrl: './teamregistration.component.html',
  styleUrls: ['./teamregistration.component.css']
})
export class TeamregistrationComponent implements OnInit {
  private teams:TeamsViewModel;
  teamname:string;
  location:string;
  mobile:number;
  constructor(private serverService:ServerService, private router: Router) { }

  ngOnInit() {
  }
  onSubmitForm(){
    this.teams={_id:null,teamname:null,location:null,contact:null};
    this.teams.teamname=this.teamname;
    this.teams.location=this.location;
    this.teams.contact=this.mobile;
    this.serverService.registerTeams(this.teams).
    subscribe(res => {
      console.log("updated");
      this.router.navigate(['/registeredteams']);
  });

  }
}
