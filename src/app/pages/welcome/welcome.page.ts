import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  foods = [
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
  constructor() { }

  ngOnInit() {
  }

  handleChange(e:any) {
    console.log('ionChange fired with value: ' + e.detail.value);
  }

  handleCancel() {
    console.log('ionCancel fired');
  }

  handleDismiss() {
    console.log('ionDismiss fired');
  }
}
