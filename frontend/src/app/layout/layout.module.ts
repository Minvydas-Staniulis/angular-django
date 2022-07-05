import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ],
})
export class LayoutModule { }
