import { Component, OnInit } from '@angular/core';
import { AccountService } from "./services/account.service"
import { ProfileService } from "./services/profile.service"
import { Account } from "./account/account.model";
import { Profile } from "./profile/profile.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts:Account[];      //account from accountservice
  profiles:Profile[];      //profile from profileservice

  accountInProfile:Account[];
  cockpitAccount = false;

  constructor(private accountService:AccountService,
    private profileService:ProfileService ){
      profileService.deleteEvent.subscribe(
        (index) =>{
          profileService.deleteProfile(index)
          this.accountInProfile.splice(index)
          console.log(this.accountInProfile)
          // this.accountInProfile.splice(0);
        }        
      )
      
  }
  ngOnInit(){
    this.accounts = this.accountService.getAccounts();
    this.profiles = this.profileService.getProfiles();
  }
  eachProfileData(data,i){
    this.accountInProfile = this.profiles[i].accounts
    console.log(this.accountInProfile)
    this.cockpitAccount =true;
  }   
  

  title = 'account-app';
}
