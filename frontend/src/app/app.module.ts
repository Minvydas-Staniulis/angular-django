import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllComponent } from './cars/view-all/view-all.component';
import { CarsModule } from './cars/cars.module';
import { DeleteCarComponent } from './cars/delete-car/delete-car.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    CarsModule
  ],
  providers: [
    ViewAllComponent,
    DeleteCarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
