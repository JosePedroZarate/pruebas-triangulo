import { calcular } from './calcular';

describe('calcular', () => {
    let component: calcular;

    beforeEach(() => {
        component = new calcular();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
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