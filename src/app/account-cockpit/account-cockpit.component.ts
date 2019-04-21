import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-account-cockpit',
  templateUrl: './account-cockpit.component.html',
  styleUrls: ['./account-cockpit.component.css']
})
export class AccountCockpitComponent implements OnInit {
  showProfileBox = false;
  showProfile(){
    this.showProfileBox =!this.showProfileBox
  }
  
  constructor(private accountService:AccountService,
    private profileService:ProfileService) { }

  ngOnInit() {
  }
  //create accounts
  onCreateAccount(name:string,status:string){
    this.accountService.pushDataToAccount(name,status)    
  }
  //save a profile
  saveProfile(name){
    this.showProfileBox = false
    let x = this.accountService.getAccounts()
    this.profileService.pushDataToProfile(name,x.slice())
    this.accountService.clearAccountData();
  }
  

}
