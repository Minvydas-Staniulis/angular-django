import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl: string = 'http://127.0.0.1:8000/car'
  constructor(private http: HttpClient) { }

  allCars(){
    return this.http.get(this.baseUrl);
  }

  addCar(carObj: any){
    return this.http.post(this.baseUrl, carObj);
  }
}
