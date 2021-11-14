import { ValueConverter } from "@angular/compiler/src/render3/view/template";

export class calcular {

    areaTriangulo=undefined;
    base=undefined;
    altura=undefined;
  

    area(base,altura){
        
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