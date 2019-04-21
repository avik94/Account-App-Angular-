import { Account } from "../account/account.model"

export class Profile{
    public profileName;
    public account;
    
    constructor(public profileName1:string,public accounts:Account[]){
        this.profileName = profileName1
        this.account = accounts
    }
}