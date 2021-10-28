import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[] = [
        new Egreso("Gastos Mensuales",10000),
        new Egreso("Gastos Mineria luz",990)
    ];
  
    eliminar(egreso:Egreso){
        const indice:number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }

}