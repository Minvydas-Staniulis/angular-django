import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  carId: string = '';
  editCarForm:FormGroup;
  carDetails: any;
  dataLoaded: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private carService: CarService, 
    private formBuilder: FormBuilder, private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  

    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data => {
      this.carId = data['id'];
    });
    if(this.carId.length){
      this.carService.viewCar(this.carId).subscribe(data => {
        this.carDetails = data;
        this.editCarForm = this.formBuilder.group({
          'car_plate': new FormControl(this.carDetails['car_plate']),
          'owner_name': new FormControl(this.carDetails['owner_name']),
        });
          this.dataLoaded = true;
      })
    }
  }

  updateCar(){
    this.carService.updateCar({ID:this.carId,...this.editCarForm.value}).subscribe(() => {
      this._snackBar.open("Record Created Successfuly");
      this.router.navigate(['cars/all']);
    }, () => 
      this._snackBar.open("Failed, car plate already exists or is in invalid format")
    );
    }
  }
