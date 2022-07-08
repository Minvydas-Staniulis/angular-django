import { Component, OnInit,  ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import {  CarService } from 'src/app/services/car.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Car } from 'src/app/types';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCarComponent } from '../delete-car/delete-car.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})

export class CarListComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  allCars: Car[];
  columnsToDisplay = ['carplate', 'ownername', 'actions'];
  dataSource: MatTableDataSource<Car>;

  constructor(private carService: CarService, public dialog: MatDialog, private _snackBar: MatSnackBar,
    public deleteCar: DeleteCarComponent) { }

  ngOnInit(){
      this.carService.allCars().subscribe(data => {
        this.allCars=data.sort((a: { car_plate: string; }, b: { car_plate: any; }) => a.car_plate.localeCompare(b.car_plate));
        this.dataSource = new MatTableDataSource(this.allCars);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  openDeleteConfirmation(id: string) {
      const dialogRef = this.dialog.open(DeleteCarComponent);
      
      dialogRef.afterClosed().subscribe(response => {
        if(response == 'delete') {
          this.deleteCar.performDelete(id);
        }
      })
  }
}

