import { Component, OnInit } from '@angular/core';
import { EmpListService } from './emp-list.service';
import { Employee } from '../models/employe';

@Component({
  selector: 'emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  
  constructor( private empListService:EmpListService) { }
  employeeList: Employee[] = []
  ngOnInit() {
    this.getEmpList()
  }



  getEmpList(){
     this.empListService.getList().subscribe((result)=>{
     this.employeeList = result 
    })
  }
}
