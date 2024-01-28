import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeForm, Employee, Genre } from '../models/employe';
import { EmpAddService } from './emp-add.service';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';


@Component({
  selector: 'emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {
 education : string[] = [
    'Matric',
    'Diploma',
    'Intermidiate',
    'Graduate',
    'Post Graduate'
  ]

  firstNameCtrl : FormControl<string | null> = new FormControl('')
  LastNameCtrl : FormControl<string | null> = new FormControl('')
  emailCtrl : FormControl<string | null> = new FormControl('')
  dateOfBirthCtrl : FormControl<string | null> = new FormControl('')
  genreCtrl : FormControl<Genre | null> = new FormControl(Genre.male)
  educationCtrl : FormControl<string | null> = new FormControl('')
  compagnyCtrl : FormControl<string | null> = new FormControl('')
  experienceCtrl : FormControl<number | null> = new FormControl()
  pakcageCtrl : FormControl<number | null> = new FormControl()

  empForm!: FormGroup<EmployeForm>;

  constructor(private fb : FormBuilder,private _matdialog:MatDialogRef<EmpAddEditComponent>,private empAddService:EmpAddService,private _snackBar: MatSnackBar) {}
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
    

  ngOnInit() {
    this.empForm = this.fb.group({ 
      firstName: this.firstNameCtrl,
      LastName: this.LastNameCtrl,
      email: this.emailCtrl,
      dateOfBirth: this.dateOfBirthCtrl,
      genre: this.genreCtrl,
      education: this.educationCtrl,
      compagny:this.compagnyCtrl,
      experience: this.experienceCtrl,
      pakcage: this.pakcageCtrl
    })
  } 
  
  
onFormSubmit(){
    if (this.empForm) {
       this.empAddService.addEmployee(this.empForm.value as Employee).subscribe((res:any)=>{
      })
       this._matdialog.close()
       this.openSnackBar('Employeur a été ajouté avec succée !!','')
    }
  }




openSnackBar(message: string, action: string) {
       this._snackBar.open(message, action,{
       duration:2500,
       horizontalPosition:this.horizontalPosition,
       verticalPosition: this.verticalPosition,
    });
  }




}
