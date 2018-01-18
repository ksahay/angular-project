import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { HttpServiceService} from '../http-service.service';

@Component({
  selector: 'user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
    
    persons: Person[] = [];

  constructor(private httpcall: HttpServiceService) {
     httpcall.getPerson().subscribe(data => this.persons = data  );
  }
  
  updateUser():void{
      this.httpcall.getPerson().subscribe(data => this.persons = data  );
  }

  ngOnInit() {
  }

}
