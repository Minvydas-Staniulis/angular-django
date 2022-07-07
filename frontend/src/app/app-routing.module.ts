import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { DeleteCarComponent } from './cars/delete-car/delete-car.component';
import { EditCarComponent } from './cars/edit-car/edit-car.component';
import { ViewAllComponent } from './cars/view-all/view-all.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars/all', pathMatch: 'full'},
  { path: 'cars', 
    children: [
      { path: '', component: ViewAllComponent},
      { path: 'all', component: ViewAllComponent},
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
