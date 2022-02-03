import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeChildComponent } from '../home-child/home-child.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeChildComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,  
    ReactiveFormsModule
  ]
})
export class HomeModule { }
