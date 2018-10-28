import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService{
    private messageSource=new BehaviorSubject<boolean>(false);
    private messageAdmin=new BehaviorSubject<boolean>(false);
    private messageRegistered=new BehaviorSubject<boolean>(false);
    private messageFee=new BehaviorSubject<number>(0);
    private noofSeats=new BehaviorSubject<number>(0);
    private level=new BehaviorSubject<string>("");
    private username=new BehaviorSubject<string>("");
    private growllogin=new BehaviorSubject<any>([]);
    currentMessage=this.messageSource.asObservable();
    currentAdmin=this.messageAdmin.asObservable();
    currentFee=this.messageFee.asObservable();
    currentSeats=this.noofSeats.asObservable();
    currentLevel=this.level.asObservable();
    currentUsername=this.username.asObservable();
    currentGrowllogin=this.growllogin.asObservable();
    currentRegistered=this.messageRegistered.asObservable();

    constructor(){}

    changeMessage(isLogin:boolean){
        this.messageSource.next(isLogin);
    }
    changeAdmin(isAdmin:boolean){
        this.messageAdmin.next(isAdmin);
    }
    ticketFee(Fee:number){
       this.messageFee.next(Fee);
    }
    changeNoofseats(Seat:number){
        this.noofSeats.next(Seat);
     }
     ChangeLevel(level:string){
        this.level.next(level);
     }
     ChangeUsername(Uname:string){
        this.username.next(Uname);
     }
     changeGrowllogin(msgs:any[]){
         this.growllogin.next(msgs);
     }
     changeRegistered(msgs:boolean){
         this.messageRegistered.next(msgs);
     }
     
}