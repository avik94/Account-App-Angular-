import { Component, OnInit, Input } from '@angular/core';
import {Account } from "./account.model";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() accountDetails:Account;   
  
  

  constructor() { }

  ngOnInit() {
  }
  onSetTo(status:string){
    console.log(this.accountDetails)
    this.accountDetails.status = status
    
  }

}
