import { Autor } from 'src/interfaces/autor.interface';


import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AUTORES } from 'src/data/data.autores';


@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
  styleUrls: ['./musica.page.scss'],
})
export class MusicaPage implements OnInit {
  autores:any[]=[];
  audio = new Audio();
  audioTiempo: any;

  constructor(public navCtrl:NavController) {
    this.autores= AUTORES.slice(0);
   }
   getItems(ev:any){
    this.autores=AUTORES.slice(0);

    var val=ev.target.value;
    //buscador 
    if(val && val.trm() !=''){
      this.autores=this.autores.filter((nombre)=>{
        return(nombre.nombre.ToLocaleLowerCase().indexOf(val.ToLocaleLowerCase())>-1);
      })
    }
   }
   reproducir(autor:Autor){
    console.log(autor);
    this.pausar_audio(autor);
    if(autor.reproduciendo){
      autor.reproduciendo=false;
      return;
    }
    this.audio.src=autor.audio;

    this.audio.load();
    this.audio.play();
    autor.reproduciendo=false;
    this.audioTiempo=setTimeout( ()=> autor.reproduciendo=false,autor.duracion*1000);

   }
   private pausar_audio(autorSel:Autor){
    clearTimeout(this.audioTiempo)
    this.audio.pause();
    this.audio.currentTime=8;
    for(let autor of this.autores){
      if(autor.nombre != autorSel.nombre){
        autor.reproduciendo=false;
      } 
    }
   }

  ngOnInit() {
  }

}
