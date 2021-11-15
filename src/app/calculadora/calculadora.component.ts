import { Component, OnInit } from '@angular/core';
import { calcular } from '../calcular/calcular'
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  area;
  base = 0;
  altura = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calcular_area(){
    let area_triangulo= new calcular();
    this.area = area_triangulo.area(this.base,this.altura);
  } 

}
