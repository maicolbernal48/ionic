import { Component, OnInit } from '@angular/core';
import { Camera ,CameraResultType, CameraSource} from '@capacitor/camera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  imagencard1:any;
  cardName:string="";
  cardText:string="";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  createCard() {
    // Aquí puedes implementar la lógica para crear la tarjeta (card)
    console.log('Nombre:', this.cardName);
    console.log('Texto:', this.cardText);
    console.log('Foto:', this.imagencard1);
  }
  takePicture1 = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Camera,
    });
  this.imagencard1=image.dataUrl;
};

}