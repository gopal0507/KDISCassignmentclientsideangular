import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.services';
import { MatchesViewModel } from '../Model/matches.component.view-model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../dataservice';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  newData=[];
  private matches:MatchesViewModel;
  home:string;
  away:string;
  date:string;
  location:string;
  edit:boolean=true;
  done:boolean=true;
  save:boolean=false;
  delete:boolean=false;
  selectedItemId:string;
  isEmpty: boolean;
  isAdmin:boolean;
  filteredHomeTeam:MatchesViewModel[];
  userRole:string;
  code:boolean;
  scrollElement:any;
  msgs=[];
  constructor(private serverService:ServerService,private route: ActivatedRoute, private Data:DataService) {
    this.onGet();
   }

  ngOnInit() {
    this.Data.currentAdmin.subscribe(message => this.isAdmin = message)
    // this.route
    //     .queryParams
    //     .subscribe(params => {
    //       this.code = params['Enable'];
    //       this.userRole= params['Type'];
            
    //     });
    //     alert(this.userRole);
    //    if(this.userRole=="admin"){
    //        this.isAdmin=true;
    //    }
       
       
  }
 
  onGet(){
    this.serverService.getServer().subscribe(
      (newdata:any[])=>{console.log(newdata);
        this.newData=newdata;
        this.selectedItemId=null;
      },
      (error)=> console.log(error)
    );
  }
  addMatches(){
    this.msgs=[];
    if(this.home && this.away && this.date && this.location){
      
   this.matches={_id:null,hteam:null,ateam:null,date:null,location:null,status:null};
   this.matches.hteam=this.home;
   this.matches.ateam=this.away;
   this.matches.date=this.date;
   this.matches.location=this.location;
   this.matches.status="True";
    this.serverService.addMatches(this.matches).
    subscribe(res => {
      this.newData.push(res);
      console.log("updated")
  },
  ()=>{},
  ()=>{
    this.home=null;
    this.away=null;
    this.date=null;
    this.location=null;
  }
);
}
else{
  this.msgs.push({severity:'warn', summary:'Warn Message', detail:'Fill out all details'});
}
}
onEdit(x){
  this.selectedItemId=x._id;
}
scrollTop() {
  this.scrollElement = document.querySelector("#autocomplete > .ui-autocomplete > .ui-autocomplete-panel");
  this.scrollElement.scrollTop = 0;
}
onCancel(){
  this.selectedItemId=null;
}
onDelet(item){
  this.selectedItemId=item._id;
}
onDelete(item){
  this.serverService.deleteMatches(item).
  subscribe(res => {
    this.onGet();
})
}
onSave(item){
  this.selectedItemId=null;
  this.serverService.updateMatches(item).
  subscribe(res => {console.log("updated")
})
}
filterAllHomeTeam(event: any, suggestions: any[]) {
  let query = event.query;
  this.filteredHomeTeam = this.filterHomeTeam(query, this.newData);
 
  
}


filterHomeTeam(query: any, HomeTeam: any[]): any[] {
  let filtered: any[] = [];
  filtered= HomeTeam.filter(h => h.hteam.toLowerCase().indexOf(query.toLowerCase()) >= 0);
  this.isEmpty = filtered.length <= 0;
  return filtered;
}
onCancels(){
  this.home=null;
  this.away=null;
  this.date=null;
  this.location=null;
  this.msgs=null;
}
}