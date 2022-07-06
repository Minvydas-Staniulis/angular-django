import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface cars {
  id: number,
  car_plate: string,
  owner_name: string
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl: string = 'http://127.0.0.1:8000/car'
  constructor(private http: HttpClient) { }

  allCars(): Observable<cars[]>{
    return this.http.get<cars[]>(this.baseUrl);
  }

  addCar(carObj: any){
    return this.http.post(this.baseUrl, carObj);
  }

  deleteCar(id: any){
    return this.http.delete(this.baseUrl + "/" + id);
  }

  viewCar(id: string) {
    return this.http.get(this.baseUrl + "/" + id);
  }

  updateCar(carObj: any) {
    return this.http.put(this.baseUrl, carObj);
  }
}
