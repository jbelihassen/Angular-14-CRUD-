import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class EmpCardService {

constructor(private apiService:ApiService,private dialog: MatDialog) { }
       

      deleteEmp(empId:string){
        return this.apiService.deleteEmployee(empId)
      }

}
