import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator,FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
formularioRegistro:FormGroup;

  constructor(public fb:FormBuilder,
    public  alertController:AlertController) {
    this.formularioRegistro=this.fb.group({
      "nombre":new FormControl("",Validators.required),
      "password":new FormControl("",Validators.required),
      "confirmacionpassword":new FormControl("",Validators.required),

    }) 

  }

  ngOnInit() {
  }
  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
    else{
      const alert = await this.alertController.create({
        header: 'Registro exitoso',
        message: '',
        buttons: ['Aceptar']
      });
  
      await alert.present();
 
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}

