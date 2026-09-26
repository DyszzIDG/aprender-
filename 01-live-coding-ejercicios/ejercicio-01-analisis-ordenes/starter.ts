// ============================================================================
// EJERCICIO 1 (LIVE CODING): Procesamiento y Agregación de Órdenes
// ============================================================================

export type Category = 'electronics' | 'clothing' | 'books';
export type OrderStatus = 'completed' | 'cancelled' | 'pending';

export interface Order {
  id: string;
  customer: string;
  category: Category;
  total: number;
  status: OrderStatus;
}

export interface OrderSummary {
  totalRevenue: number;
  byCategory: Record<string, number>;
  vipCustomers: string[];
}

/**
 * Procesa un listado de órdenes y devuelve las métricas agregadas.
 * 
 * @param orders Lista de órdenes de compra recibidas desde la API
 * @returns Resumen con ingresos, totales por categoría y clientes VIP
 */
export function analyzeOrders(orders: Order[]): OrderSummary {
  // TODO: Tu implementación aquí
  // 1. Filtrar las que NO sean 'cancelled'
  // 2. Calcular totalRevenue de las completadas
  // 3. Agrupar por categoría
  // 4. Identificar clientes VIP (gasto >= 150)

  return {
    totalRevenue: 0,
    byCategory: {},
    vipCustomers: []
  };
}

// ============================================================================
// CASO DE PRUEBA (Para verificar tu solución)
// ============================================================================
const sampleOrders: Order[] = [
  { id: "o-1", customer: "Sofia", category: "electronics", total: 300, status: "completed" },
  { id: "o-2", customer: "Carlos", category: "clothing", total: 80, status: "completed" },
  { id: "o-3", customer: "Sofia", category: "clothing", total: 50, status: "completed" },
  { id: "o-4", customer: "Marcos", category: "electronics", total: 500, status: "cancelled" },
  { id: "o-5", customer: "Carlos", category: "books", total: 90, status: "completed" },
  { id: "o-6", customer: "Lucia", category: "books", total: 40, status: "pending" },
];

console.log("--- RESULTADO OBTENIDO ---");
console.log(JSON.stringify(analyzeOrders(sampleOrders), null, 2));

console.log("\n--- RESULTADO ESPERADO ---");
console.log(JSON.stringify({
  totalRevenue: 520, // 300 + 80 + 50 + 90
  byCategory: {
    electronics: 300,
    clothing: 130, // 80 + 50
    books: 90
  },
  vipCustomers: ["Sofia", "Carlos"] // Sofia: 350, Carlos: 170
}, null, 2));
