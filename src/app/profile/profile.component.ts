import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 hideProfile: boolean = false;
 fname = "Xyz";
 lname = "Doe";
 org_name = "Manufacturing";
 office_location = "123 street name, zone A, City, State";
 empid= 456789;
  constructor() { }

  ngOnInit() {
  }

}
