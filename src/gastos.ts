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