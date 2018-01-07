import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  hoy = new Date();
  nombre = "jose";
  numeros = [1,2,3,4,5,6,7];
  decimal = 2.123456789;
  porcentaje = 0.126;
  dinero = 1500.5;

  constructor() { }



}
