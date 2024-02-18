import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

 

  ngOnInit() {
  }

  cancelButtonText = "Annuler"
  deleteButtonText = "Confirmé"
  message: string = ""
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertDialogComponent>) {
    
if (data) {
      this.message = data.message || this.message;
      if (data.buttonText.Confirmé) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('300vw','300vw')
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
