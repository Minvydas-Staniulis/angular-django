import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import {  CarService } from 'src/app/services/car.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Car } from 'src/app/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})

export class ViewAllComponent implements OnDestroy,OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private subs= new Subscription();

  allCars: Car[];
  columnsToDisplay = ['carplate', 'ownername', 'actions'];
  dataSource: MatTableDataSource<Car>;
 
  constructor(private carService: CarService) { }

  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(this.dataSource?.filter){
      this.dataSource.filter = filterValue.trim().toUpperCase();
    }
    
    if(this.dataSource?.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(){
    this.subs.add(
      this.carService.allCars().subscribe(data => {
        this.allCars=data.sort((a: { car_plate: string; }, b: { car_plate: any; }) => a.car_plate.localeCompare(b.car_plate));
        this.dataSource = new MatTableDataSource(this.allCars);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
      )
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
   }

}
