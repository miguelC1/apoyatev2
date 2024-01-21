import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserInput } from 'src/app/_input/userInput';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  formularioDeRegistro!: FormGroup;
  error : string = "Usuario ReBol o ID Free Fire ya esta registrado";
  //errorPassword : string = "La contraseña no coincide con la "
  correct : boolean= true;
  showPassword : boolean=true;
  showPasswordConfirm : boolean=true;
  cargando: boolean=false;

  //para whatsapp
  codigoRegion : string= "591";
  numeroWhatsapp : string = "74570661";
  url : string = "https://wa.me/"+this.codigoRegion+this.numeroWhatsapp+"?text=Nesecito%20ayuda";

  user={
    name:"",
    lastName:"",
    correo: "",
    carrera: "",
    foto: "https://img2.rtve.es/i/?w=1600&i=1641224424604.jpg"
  }
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.iniciarFormulario();
    
  }

  iniciarFormulario(){
    this.formularioDeRegistro= new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'userName': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'passwordConfirm' : new FormControl('', [Validators.required])
      });
  }

  registarUsuario(){
    this.cargando=true;
    let input= new UserInput();
    input.name=this.formularioDeRegistro.value['name'];
    input.lastName=this.formularioDeRegistro.value['lastName'];
    input.username=this.formularioDeRegistro.value['userName'];
    input.password=this.formularioDeRegistro.value['password'];
    input.username=input.username.trim();
    let passwordConfirm= this.formularioDeRegistro.value['passwordConfirm'];
    
    
  }

  informacionUsuario(){
   
  }

  informacionFreeFire(){
   
  }

  togglePasswordText(){
    this.showPassword=!this.showPassword;
  }

  togglePasswordConfirmText(){
     this.showPasswordConfirm=!this.showPasswordConfirm;
  }


}
