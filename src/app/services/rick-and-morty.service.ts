import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private HttpClient:HttpClient) { }
  getCharacters(params:any){
    return this.HttpClient.get(environment.baseUrl + environment.Character,{params})
  }
}
