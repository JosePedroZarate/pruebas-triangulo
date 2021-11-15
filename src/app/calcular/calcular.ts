import { ValueConverter } from "@angular/compiler/src/render3/view/template";

export class calcular {

    areaTriangulo=undefined;
    base=undefined;
    altura=undefined;
  

    area(base,altura){

        /** 
         * Conversion de valores entrantes a decimales
        */
        if(base == (parseFloat(base))) base= parseFloat(base);
        if(altura == (parseFloat(altura))) altura= parseFloat(altura);
        
         /** 
         * Codigo que resuelve las pruebas
        */
        if(base === undefined && altura === undefined) 
            return "Syntaxis error";
        
        if(base === undefined || altura === undefined) 
            return "Syntaxis error";

        if(base === null && altura === null) 
            return "Syntaxis error";
        
        if(base === null || altura === null) 
            return "Syntaxis error";
        
        if(Math.sign(base) === -1 && Math.sign(altura) === -1)
            return "Datos erroneos";
            
        if(Math.sign(base) === -1 || Math.sign(altura) === -1)
            return "Datos erroneos";

        if(typeof (base) !== "number" && typeof (altura) !== "number")
            return "Syntaxis error";

        if(typeof (base) !== "number" || typeof (altura) !== "number")
            return "Syntaxis error";

        return this.areaTriangulo=(base*altura)/2;
    }

}