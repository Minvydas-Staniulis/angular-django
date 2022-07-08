import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.scss']
})
export class DeleteCarComponent {

  constructor(public carService: CarService, private _snackBar: MatSnackBar) { }

  performDelete(id: string): void {
    if(id){
      this.carService.deleteCar(id).subscribe(() => {
        this._snackBar.open("Record deleted successfuly");
        this.refresh();
      }, () => {
        this._snackBar.open("Oops, something went wrong :(");
      });
    }
  }

  refresh(): void {
    window.location.reload();
}
}