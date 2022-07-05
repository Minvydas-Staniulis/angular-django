import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  addCarForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addCarForm = this.formBuilder.group({
      'car_plate': new FormControl(''),
      'owner_name': new FormControl('')
    })
  }

  createCar(){
    console.log(this.addCarForm.value);
  }

}
