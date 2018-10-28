import { Injectable } from "@angular/core";
import { Http,Headers,Response } from "@angular/http";


//import {  } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ServerService{
      constructor(private http:Http){

      }
     //const headers=new Headers({'Content-Type':'application/json'})
      getServer():any{
     return this.http.get('http://localhost:3000/getmatches')
     .map(
        ( response:Response)=>response.json()
     )
      }
      getTeamServer():any{
            return this.http.get('http://localhost:3000/getteams')
            .map(
               ( response:Response)=>response.json()
            )
             }
      getRegistered():any{
            return this.http.get('http://localhost:3000/getregisteredusers')
            .map(
               ( response:Response)=>response.json()
            )
             }
      addMatches(matches:any):any{
            return this.http.post('http://localhost:3000/matchesentry', matches)
            .map(
               ( response:Response)=>response.json()
            )
             }
             updateMatches(matches:any):any{
                  return this.http.put('http://localhost:3000/updatematches',matches)
                  .map(
                     ( response:Response)=>response.json()
                  )
                   }
                   deleteMatches(matches:any):any{
                        return this.http.put('http://localhost:3000/deletematches',matches)
                        .map(
                           ( response:Response)=>response.json()
                        )
                         }
                         registerUsers(users:any):any{
                              return this.http.post('http://localhost:3000/registerusers', users)
                              .map(
                                 ( response:Response)=>response.json()
                              )
                               }   
                               registerTeams(teams:any):any{
                                    return this.http.post('http://localhost:3000/registerteams', teams)
                                    .map(
                                       ( response:Response)=>response.json()
                                    )
                                     }    
                                     ticketUsers(tickets:any):any{
                                          return this.http.post('http://localhost:3000/ticketusers', tickets)
                                          .map(
                                             ( response:Response)=>response.json()
                                          )
                                           }                    
}