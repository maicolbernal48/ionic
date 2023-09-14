import { IonicModule } from '@ionic/angular';
import { RickAndMortyService } from './../services/rick-and-morty.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
  standalone:true,
  imports:[ IonicModule, CommonModule, FormsModule, SharedModule]})
export class ApiPage implements OnInit {

  characters:any[]=[];
  params={}as any;

  constructor(
    private RickAndMortyService:RickAndMortyService) { }

  ngOnInit() {
    this.params.page = 0;
   }
 //obtener personajes//
 getCharacters(evet?:any){
  this.params.page +=1;
  this.RickAndMortyService.getCharacters(this.params).subscribe({
    next:(res:any)=>{
      this.characters.push(...res.results)
      console.log(this.characters);

    },
    error:(error:any)=>{

    }
  })
 }


}
