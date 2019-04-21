import { Account } from '../account/account.model';

export class AccountService{
    accounts:Account[] = []

    getAccounts(){
        return this.accounts;
    }
    pushDataToAccount(name,status){
        const newData = new Account(name,status)
        this.accounts.push(newData);
    }
    clearAccountData(){
        this.accounts.length = 0
    }
}