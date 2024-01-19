import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  componentes!: Observable<Component[]>;

  botonFreeFire: string= "https://firebasestorage.googleapis.com/v0/b/classmate-fb852.appspot.com/o/rebol3Imagenes%2FbotonFreeFire.png?alt=media&token=b3c3e5f6-2885-4097-8c6e-e4d62198a96a";
  botonMobileLegends: string = "https://firebasestorage.googleapis.com/v0/b/classmate-fb852.appspot.com/o/rebol3Imagenes%2FbotonMobileLegends.png?alt=media&token=bf2277a7-5395-4b75-9acd-7a1c34e6d80d";
  materias: string[]=["Ingles I", "Algebra","Calculo I","Fisica I","Introduccion a la Programacion","Ingles II"];

  constructor(private menuCtrl: MenuController, 
              ) {}

  ngOnInit() {
    //this.componentes=this.dataservice.getMenuOpts();
  }

  mostrarMenu(){
    return this.menuCtrl.open('fist');
  }
  ingresarCurso(ms: string){
    console.log(ms)
  }
}
