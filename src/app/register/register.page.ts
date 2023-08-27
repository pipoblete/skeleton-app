import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  password: string = '';
  message: string = '';
  username: string = '';

  constructor(private router: Router, private alertController: AlertController, private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }

  async register() {
    if (this.username && this.password) {
      if (this.password.length >= 3 && this.password.length <= 8) {
        const alert = await this.alertController.create({
          header: 'Registro exitoso',
          message: '¡Su cuenta ha sido registrada!',
          buttons: ['OK']
        });
  
        await alert.present();
        this.router.navigate(['/login']);
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'La contraseña debe tener entre 3 y 8 caracteres',
          buttons: ['OK']
        });
  
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor complete todos los campos',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }
  
}
