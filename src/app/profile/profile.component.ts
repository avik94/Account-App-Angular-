import { Component, OnInit, Input } from '@angular/core';
import { Profile } from "../profile/profile.model";
import { ProfileService } from "../services/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() profile:Profile
  @Input() index:Number

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
  }
  delete(){
    this.profileService.deleteEvent.emit(this.index)

  }

}
