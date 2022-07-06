import { Component, OnInit, ViewChild, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { merge, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.allCars().subscribe(data => {
        this.allCars = data;
        this.allCars.sort((a: { car_plate: string; }, b: { car_plate: any; }) => a.car_plate.localeCompare(b.car_plate));
        this.dataSize = this.allCars.length;
        this.linkListToPaginator();
    });
  }

  linkListToPaginator() {
    merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        return of(this.allCars);
      })
    ).subscribe(res => {
      const from = this.paginator.pageIndex * 10;
      const to = from + 10;
      
      this.allCars = res.slice(from, to);
    });
  }

}
