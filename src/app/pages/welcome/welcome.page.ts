import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  facultades = [
    {
      id: 1,
      name: 'Facultad de Ciencias y Tecnologias',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Facultad de Ciencias Economicas',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Facultad de Ciencias Juridicas y Politicas',
      type: 'dessert',
    },
  ];
  carreras: string[]=["Ing. Sistemas", "Ing. Informatica","Ing. civil","Ing. Electromecanica"];
  verCarreras:boolean=false;
  mostrarBtn: boolean=false;
  constructor() { }

  ngOnInit() {
  }

  handleChange(e:any) {
    this.verCarreras=true;
    console.log('ionChange fired with value: ' + e.detail.value);
  }

  handleCancel() {
    console.log('ionCancel fired');
  }

  handleDismiss() {
    console.log('ionDismiss fired');
  }
  goToHome(){
    this.mostrarBtn=true;
  }
}
