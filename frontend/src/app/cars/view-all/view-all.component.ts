import { AfterViewInit, Component, OnInit, ViewChild, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { merge, of, tap} from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { cars, CarService } from 'src/app/services/car.service';
import { MatTableDataSource } from '@angular/material/table';

export interface CarData{
  id: number;
  car_plate: string;
  owner_name: string;
}

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})

export class ViewAllComponent implements OnInit {
  allCars: any;
  columnsToDisplay = ['carplate', 'ownername', 'actions'];
  dataSource: MatTableDataSource<CarData>

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private carService: CarService) { 
    this.carService.allCars().subscribe(data => {
      this.allCars = data;
      this.allCars.sort((a: { car_plate: string; }, b: { car_plate: any; }) => a.car_plate.localeCompare(b.car_plate));
      this.dataSource = new MatTableDataSource(this.allCars);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnInit(): void {
    
  }
}
