import { ValueConverter } from "@angular/compiler/src/render3/view/template";

export class calcular {

    areaTriangulo=undefined;
    base=undefined;
    altura=undefined;
  

    area(base,altura){  
        return this.areaTriangulo=(base*altura)/2;
    }

}