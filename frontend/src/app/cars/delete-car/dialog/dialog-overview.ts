import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteCarComponent } from '../delete-car.component';
import { DialogData } from 'src/app/types/dialog';

@Component({
    selector: 'dialog-overview',
    templateUrl: 'dialog-overview.html',
  })
  export class DialogOverview {
    carId: string = '';

    constructor(
      public dialogRef: MatDialogRef<DialogOverview>, 
      private deleteCar: DeleteCarComponent,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    onOkClick(): void {
        this.deleteCar.performDelete(this.data.id);
        this.onNoClick();
    }
}