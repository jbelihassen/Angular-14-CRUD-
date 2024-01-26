import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeForm, Genre } from './employe';

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
  constructor(private fb : FormBuilder) {}
  
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
  
  
  onFormSubmi(){
    if (this.empForm) {
      console.log('this.empForm :>> ', this.empForm.value);
    }
  }
 
}
