import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountCockpitComponent } from './account-cockpit/account-cockpit.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountService } from './services/account.service';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountCockpitComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
