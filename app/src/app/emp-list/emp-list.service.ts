import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmpListService {

constructor(private http:HttpClient) { }

apiUrl = `/api/employees`;

getList():Observable<Employee[]>{
  return this.http.get<Employee[]>(this.apiUrl)
}






}
