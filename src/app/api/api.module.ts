import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiPageRoutingModule } from './api-routing.module';
import { ApiPage } from './api.page';
import { RickAndMortyService } from './../services/rick-and-morty.service';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiPageRoutingModule
  ],
  declarations: []
})
export class ApiPageModule {}
