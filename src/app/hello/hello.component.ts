import { Component, OnInit } from '@angular/core';
import { HttpServiceService} from '../http-service.service';
import { UserlistComponent} from '../userlist/userlist.component';
import {Response} from '../response';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
    empid:number;
    fname:string;
    lname:string;
    hasError:boolean=true;
    httpcall: HttpServiceService
    response:Response;
//    private userlist: UserlistComponent;

    alertName(form):void {
        console.log(form.value);
        this.httpcall.postPerson(form.value).subscribe(data => this.response = data  );
        form.resetForm();
    }

  constructor(httpcall: HttpServiceService ) { 
      this.httpcall = httpcall;
  //    this.userlist = new UserlistComponent(httpcall);
  //    this.userlist.updateUser();
  }

  ngOnInit() {
  }

}
