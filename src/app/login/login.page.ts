import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,
  Validator,
  FormBuilder,
   Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 formularioLogin: FormGroup;
  localStorage:string="";
   constructor(public fb:FormBuilder,
    public  alertController:AlertController,
    public router:Router) 
    {
    this.formularioLogin=this.fb.group({
      "nombre":new FormControl("",Validators.required),
      "password":new FormControl("",Validators.required),

    })

   }

  ngOnInit() {
  }
  async ingresar() {
    var f = this.formularioLogin.value;
    var usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      if (usuario.nombre == f.nombre && usuario.password == f.password) {
        console.log('Ingresado');
        this.router.navigate(['/opciones']);
        localStorage.setItem('ingresado', 'true');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Tienes que llenar todos los datos',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
     
    }
    
    
    
  }  
  

}
  



