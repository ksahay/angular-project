import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Person} from './person';
import {Response} from './response';

@Injectable()
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  
  getPerson() : Observable<Person[]> {
      return this.http.get<Person[]>(" https://0eeyl20qje.execute-api.us-east-1.amazonaws.com/dev/employee ");
  }

  postPerson(data) : Observable<Response> {
      return this.http.post<Response>(" https://0eeyl20qje.execute-api.us-east-1.amazonaws.com/dev/employee ", data);
  }
}
