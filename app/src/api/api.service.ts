import { Injectable } from '@angular/core';
import { Employee } from '../app/models/employe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http:HttpClient) { }
      apiUrl = 'api/employees/'

    createEmployee(employee: Employee) {
    const headers = {
          'Content-Type': 'application/json',
        };
        return this.http.post(`${this.apiUrl}`, employee, { headers: headers });
      }

   deleteEmployee(id: string) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
