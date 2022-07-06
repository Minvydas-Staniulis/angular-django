import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  addCarForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private carService: CarService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.addCarForm = this.formBuilder.group({
      'car_plate': new FormControl(''),
      'owner_name': new FormControl('')
    })
  }

  createCar(){
    this.carService.addCar(this.addCarForm.value).subscribe(data => {
      this._snackBar.open("Record Created Successfuly");
      this.router.navigate(['cars/all']);
    }, err => {
      this._snackBar.open("Failed, car plate already exists or is in invalid format");
    });
  }
}
