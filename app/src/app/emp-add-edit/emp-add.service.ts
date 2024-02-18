import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employe';
import { ApiService } from 'src/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class EmpAddService {

constructor(private apiService:ApiService) { }

createEmployee(employee: Employee) {
  return this.apiService.createEmployee(employee);
}

}
