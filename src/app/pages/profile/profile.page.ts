import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user={
    name:"Michael",
    lastName:"Ledezma Pacheco",
    correo: "michael12@gmail.com",
    carrera: "Ing. Informatica",
    foto: "https://img2.rtve.es/i/?w=1600&i=1641224424604.jpg"
  }
  constructor() { }

  ngOnInit() {
  }
  presentSalaModal(){

  }
}
