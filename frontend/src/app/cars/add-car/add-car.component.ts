import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  addCarForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private carService: CarService) { }

  ngOnInit(): void {
    this.addCarForm = this.formBuilder.group({
      'car_plate': new FormControl(''),
      'owner_name': new FormControl('')
    })
  }

  createCar(){
    this.carService.addCar(this.addCarForm.value).subscribe(data => {
      console.log("Record created");
    }, err => {
      console.log(err);
    });
  }
}
