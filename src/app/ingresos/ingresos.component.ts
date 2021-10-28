import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  ingresos:Ingreso[] = [];
  
  constructor(private ingresoServicio:IngresoServicio) { }

  ngOnInit() {
    this.ingresos = this.ingresoServicio.ingresos;//Inicializamos nuestro arreglo de ingresos
  }

  eliminarRegistro(ingreso:Ingreso){//mandamos a llamar a eliminar con el ingreso respectivo
    this.ingresoServicio.eliminar(ingreso);
  }

}
