import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { DeleteCarComponent } from './cars/delete-car/delete-car.component';
import { EditCarComponent } from './cars/edit-car/edit-car.component';
import { CarListComponent } from './cars/car-list/car-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars/all', pathMatch: 'full'},
  { path: 'cars', 
    children: [
      { path: '', component: CarListComponent},
      { path: 'all', component: CarListComponent},
      { path: 'delete/:id', component: DeleteCarComponent},
      { path: 'edit/:id', component: EditCarComponent},
      { path: 'create', component: AddCarComponent},
    ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
