import { Component, OnInit, ViewChild, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})

export class ViewAllComponent implements OnInit {
  allCars: any;

  title = 'paginator';
  dataSize: number = 0;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.allCars().subscribe(data => {
        this.allCars = data;
        this.allCars.sort((a: { car_plate: string; }, b: { car_plate: any; }) => a.car_plate.localeCompare(b.car_plate));
        console.log(this.allCars);
    });
  }

}
