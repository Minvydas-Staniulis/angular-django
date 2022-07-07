import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { DialogOverview } from './dialog/dialog-overview';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.scss']
})
export class DeleteCarComponent implements OnInit {

  carId: string = '';

  constructor(private activatedRoute: ActivatedRoute, private carService: CarService, 
    private _snackBar: MatSnackBar, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.carId = data['id'];
    });

    const dialogRef = this.dialog.open(DialogOverview, {
      width: '250px',
      data: {id: this.carId}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['cars/all']);
    });
  }

  performDelete(id: string): void {
    if(id){
      this.carService.deleteCar(id).subscribe(() => {
        this._snackBar.open("Record deleted successfuly");
        this.router.navigate(['cars/all']);
      }, () => {
        this._snackBar.open("Oops, something went wrong :(");
      });
    }
  }
}