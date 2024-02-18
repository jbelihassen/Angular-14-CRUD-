import { Component, Inject, OnInit } from '@angular/core';
import { CheckboxRequiredValidator, FormBuilder, FormControl, FormGroup, FormsModule, RequiredValidator, Validators } from '@angular/forms';
import { EmployeForm, Employee, Genre } from '../models/employe';
import { EmpAddService } from './emp-add.service';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';


@Component({
  selector: 'emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],


})
export class EmpAddEditComponent implements OnInit {
 education : string[] = [
    'Matric',
    'Diploma',
    'Intermidiate',
    'Graduate',
    'Post Graduate'
  ]

  firstNameCtrl : FormControl<string | null> = new FormControl(null,[Validators.required])
  lastNameCtrl : FormControl<string | null> = new FormControl(null,[Validators.required])
  emailCtrl : FormControl<string | null> = new FormControl(null)
  dateCtrl : FormControl<string | null> = new FormControl(null)
  genreCtrl : FormControl<Genre | null> = new FormControl(Genre.male)
  educationCtrl : FormControl<string | null> = new FormControl('')
  compagnyCtrl : FormControl<string | null> = new FormControl('')
  experienceCtrl : FormControl<number | null> = new FormControl()
  salaireCtrl : FormControl<number | null> = new FormControl()

  empForm!: FormGroup<EmployeForm>;

  constructor(private fb : FormBuilder,private _matdialog:MatDialogRef<EmpAddEditComponent>,private empAddService:EmpAddService,private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
    

  ngOnInit() {
    this.empForm = this.fb.group({ 
      firstName: this.firstNameCtrl,
      lastName: this.lastNameCtrl,
      email: this.emailCtrl,
      date: this.dateCtrl,
      genre: this.genreCtrl,
      education: this.educationCtrl,
      compagny:this.compagnyCtrl,
      experience: this.experienceCtrl,
      salaire: this.salaireCtrl
    })
  } 
  
  onClose(){
    this._matdialog.close();
  }
onFormSubmit(){
    if (this.empForm.valid) {
       this.empAddService.createEmployee(this.empForm.value as Employee).subscribe((res:any)=>{
        })
        
       this.onClose()
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
