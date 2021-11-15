import { calcular } from './calcular';

describe('calcular', () => {
    let component: calcular;

    beforeEach(() => {
        component = new calcular();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    it('should return "Syntaxis error" when "base" and "altura" are undefined', () => {
        expect(component.area(undefined, undefined)).toContain("Syntaxis error");       
    });

    it('should return "Syntaxis error" when "base" or "altura" are undefined', () => {
        expect(component.area(undefined, 6)).toContain("Syntaxis error");       
    });

    it('should return "Syntaxis error" when "base" or "altura" are undefines', () => {
        expect(component.area(3, undefined)).toContain("Syntaxis error");       
    });


    it('should return "Syntaxis error" when "base" and "altura" are null', () => {
        expect(component.area(null, null)).toContain("Syntaxis error");       
    });

    it('should return "Syntaxis error" when "base" or "altura" are null', () => {
        expect(component.area(null, 6)).toContain("Syntaxis error");       
    });

    it('should return "Syntaxis error" when "base" or "altura" are null', () => {
        expect(component.area(3, null)).toContain("Syntaxis error");       
    });

    it('should return "Datos erroneos" when "base" and "altura" are negative numbers', () => {
        expect(component.area(-3, -3)).toContain("Datos erroneos");       
    });

    it('should return "Datos erroneos" when "base" or "altura" are negative numbers', () => {
        expect(component.area(-3, 6)).toContain("Datos erroneos");       
    });

    it('should return "Datos erroneos" when "base" or "altura" are negative numbers', () => {
        expect(component.area(3,-6)).toContain("Datos erroneos");       
    });

    it('should return "Syntaxis error" when "base" and "altura" are not a number', () => {
        expect(component.area("a","b")).toContain("Syntaxis error");       
    });

    it('should return "Syntaxis error" when "base" or "altura" are not a number', () => {
        expect(component.area(3,"b")).toContain("Syntaxis error");       
    });

    it('should return "Syntaxis error" when "base" o "altura" are not a number', () => {
        expect(component.area("a",6)).toContain("Syntaxis error");       
    });

    it('should return 9 when the values are 3 and 6', () => {
        component.area(3,6);
        expect(component.areaTriangulo).toBe(9);
    });

    it('should return 11.9 when the values are 3.5 and 6.8', () => {
        component.area(3.5,6.8);
        expect(component.areaTriangulo).toBe(11.9);
    });

});