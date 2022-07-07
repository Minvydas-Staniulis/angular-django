import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl: string = 'http://127.0.0.1:8000/car'
  constructor(private http: HttpClient) { }

  allCars(): Observable<Car[]>{
    return this.http.get<Car[]>(this.baseUrl);
  }
// CREATE TYPES
  addCar(carObj: Car){
    return this.http.post(this.baseUrl, carObj); 
  }

  deleteCar(id: string){
    return this.http.delete(this.baseUrl + "/" + id);
  }

  viewCar(id: string) {
    return this.http.get(this.baseUrl + "/" + id);
  }

  updateCar(carObj: Car) {
    return this.http.put(this.baseUrl, carObj);
  }
}
