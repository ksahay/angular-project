import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpServiceService } from './http-service.service';
import { UserlistComponent } from './userlist/userlist.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProfileComponent,
    UserlistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ HttpClient,HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
