// Definición de la interface Gasto
interface Gasto {
    monto: number; // Monto de gasto
    categoria: string; // Categoría del gasto
    descripcion: string; // Descripción del gasto
}

// Array para almacenar los gastos
const gastos: Gasto[] = [];

// Función para agregar un nuevo gasto
function agregarGasto(monto: number, categoria: string, descripcion: string): Gasto {
    // Validar que el monto sea positivo
    if (monto <= 0) {
        throw new Error("El monto debe ser un número positivo");
    }
    // Crear el objeto Gasto
    const nuevoGasto: Gasto = { monto, categoria, descripcion };
    // Agregar el nuevo gasto al array
    gastos.push(nuevoGasto);
    // Retornar el nuevo gasto
    return nuevoGasto;
}

// Función para obtener un resumen de gastos por categoría
function resumenPorCategoria(): Record<string, number> {
    // Usa reduce para agrupar y sumar gastos por categoría
    return gastos.reduce((acumulador: Record<string, number>, gasto: Gasto) => {
        // Si la categoría ya existe, suma el monto al total existente
        if (acumulador[gasto.categoria]) {
            acumulador[gasto.categoria] += gasto.monto;
        } else {
            // Si es la primera vez que aparece la categoría, inicializa con el monto
            acumulador[gasto.categoria] = gasto.monto;
        }
        // Retorna el acumulador para la siguiente iteración
        return acumulador;
    }, {}); // Inicia con un objeto vacío
}