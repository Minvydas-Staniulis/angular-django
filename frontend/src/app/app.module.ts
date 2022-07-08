import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarsModule } from './cars/cars.module';
import { MatDialogModule} from '@angular/material/dialog';
import { DeleteCarComponent } from './cars/delete-car/delete-car.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [DeleteCarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    CarsModule,
    MatDialogModule,
  ],
  providers: [
    CarListComponent,
    DeleteCarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
