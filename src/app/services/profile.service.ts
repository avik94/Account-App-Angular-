import { Profile } from '../profile/profile.model';
import { EventEmitter } from '@angular/core';

export class ProfileService{

    mainProfiles:Profile[] = []

    deleteEvent = new EventEmitter();
    
    getProfiles(){
        return this.mainProfiles;
    }
    pushDataToProfile(name,accounts){   
        const newProfile = new Profile(name,accounts) 
        this.mainProfiles.push(newProfile) 
    }
    deleteProfile(i){
        this.mainProfiles.splice(i,1)
        console.log(i)
    }

}

