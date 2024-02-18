import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employe';
import { EmpCardService } from './emp-card.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

@Component({
  selector: 'emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.scss']
})
export class EmpCardComponent implements OnInit {
    
  @Input() empDetail!:Employee 

  constructor(private empCardService:EmpCardService,private dialog: MatDialog ) { }

  ngOnInit() {
   
  }

  onDeleteEmp(){

    this.dialog.open(AlertDialogComponent,{
      width: '300px', 
      height: '200px', 
      data:{
        message: 'Vous êtes sûr de supprimer l\'employeur ?',
        buttonText: {
          Confirmé: 'Confirmé',
          Annuler : 'Annuler'
        },
        
      }
    });
    
     this.empCardService.deleteEmp(this.empDetail.id).subscribe(()=>{
       console.log('this.empDetail.id :>> ', this.empDetail.id);
     })
  }
  
}
