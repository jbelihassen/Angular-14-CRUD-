import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private dialog:MatDialog,private http: HttpClient){}
  openAddEditForm(){
   this.dialog.open(EmpAddEditComponent,{
    width:'480px',
    height:'530px'
   });
  }

}
