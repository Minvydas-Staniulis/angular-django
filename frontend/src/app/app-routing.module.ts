import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { DeleteCarComponent } from './cars/delete-car/delete-car.component';
import { EditCarComponent } from './cars/edit-car/edit-car.component';
import { ViewAllComponent } from './cars/view-all/view-all.component';
import { ViewCarComponent } from './cars/view-car/view-car.component';

const routes: Routes = [

  { path: 'cars', 
    children: [
      { path: '', component: ViewAllComponent},
      { path: 'all', component: ViewAllComponent},
      { path: 'view/:id', component: ViewCarComponent},
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
