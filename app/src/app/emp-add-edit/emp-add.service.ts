import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmpAddService {

constructor(private http:HttpClient) { }
 apiUrl = `/api/employees`;

addEmployee(body:Employee){
  const headers = { 'Content-Type': 'application/json' };
  // body = JSON.stringify(body);
  return this.http.post(this.apiUrl,body,{headers:headers} )
}

}
