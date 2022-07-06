import { AfterViewInit, Component, OnInit, ViewChild, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { merge, of, tap} from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { cars, CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})

export class ViewAllComponent implements OnInit {
  allCars: cars[] = [];
  columnsToDisplay = ['carplate', 'ownername', 'actions'];
  dataSource!: any;
  dataSize: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator // good

  constructor(private carService: CarService) { 
    this.carService.allCars().subscribe(data => {
      this.allCars = data;
      console.log(this.allCars);
      this.allCars.sort((a: { car_plate: string; }, b: { car_plate: any; }) => a.car_plate.localeCompare(b.car_plate));
    })
  }

  ngOnInit(): void {
    //this.loadPage();
  }

  loadPage() {
    this.carService.allCars().subscribe(data => {
      this.allCars = data;
      this.allCars.sort((a: { car_plate: string; }, b: { car_plate: any; }) => a.car_plate.localeCompare(b.car_plate));
      this.dataSize = this.allCars.length;
    });
  }
}
