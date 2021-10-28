import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[] = [
        new Ingreso("Sueldo",60000),
        new Ingreso("Ahorros",100000)
    ];
    
    eliminar(ingreso:Ingreso){ //metodo para eliminar un registro, recibimos un ingreso que se encuentra en nuestro arreglo
        const indice:number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);//splice con el cual indicamos el indice del elemento a eliminar

    }
}