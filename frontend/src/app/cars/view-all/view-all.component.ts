import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  allCars: any;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.allCars().subscribe(data => {
        this.allCars = data;
    });
  }

}
