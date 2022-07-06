import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {

  carId: string = '';

  constructor(private activatedRoute: ActivatedRoute, private carService: CarService, 
    private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.carId = data['id'];
    });

    if(this.carId){
      this.carService.deleteCar(this.carId).subscribe(data => {
        this._snackBar.open("Record deleted successfuly");
        this.router.navigate(['cars/all']);
      }, err => {
        this._snackBar.open("Oops, something went wrong :(");
      });
    }
  }

}
