import { agregarGasto, resumenPorCategoria } from './path-to-your-functions';

describe('Tests for agregarGasto function', () => {
    it('should add a new expense correctly', () => {
        // Mock data and calls
        const estadoInicial = [];
        const gasto = { nombre: 'Comida', cantidad: 50 };
        
        const nuevoEstado = agregarGasto(estadoInicial, gasto);
        
        expect(nuevoEstado).toHaveLength(1);
        expect(nuevoEstado[0]).toEqual(gasto);
    });

    it('should not add an invalid expense', () => {
        const estadoInicial = [];
        const gastoInvalido = { nombre: '', cantidad: 50 };
        
        const nuevoEstado = agregarGasto(estadoInicial, gastoInvalido);
        
        expect(nuevoEstado).toHaveLength(0);
    });
});

describe('Tests for resumenPorCategoria function', () => {
    it('should summarize expenses by category correctly', () => {
        const gastos = [
            { categoria: 'Comida', cantidad: 50 },
            { categoria: 'Transporte', cantidad: 20 },
            { categoria: 'Comida', cantidad: 30 }
        ];
        
        const resumen = resumenPorCategoria(gastos);
        
        expect(resumen).toEqual({
            'Comida': 80,
            'Transporte': 20
        });
    });

    it('should return an empty object for no expenses', () => {
        const gastos = [];
        
        const resumen = resumenPorCategoria(gastos);
        
        expect(resumen).toEqual({});
    });
});
