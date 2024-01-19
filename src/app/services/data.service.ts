import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }

  getMenuOpts(){
    return this.http.get<Component[]>('assets/data/menu-opts-json');
   
  }
}
