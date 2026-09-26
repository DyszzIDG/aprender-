# Ejercicio 1: Procesador de Métricas de Órdenes (Live Coding)

## Contexto de Negocio
Trabajas en una fintech / e-commerce. La API devuelve un listado plano de transacciones u órdenes de compra. El equipo de Producto necesita una función pura para procesar este lote y obtener métricas clave.

## Objetivo
Implementar la función `analyzeOrders(orders: Order[]): OrderSummary` en el archivo `starter.ts`.

### Reglas:
1. **Descartar canceladas**: Las órdenes con `status: 'cancelled'` deben ser completamente ignoradas en todos los cálculos.
2. **Total de ingresos (`totalRevenue`)**: Suma del `total` de todas las órdenes completadas (`status: 'completed'`).
3. **Totales por categoría (`byCategory`)**: Objeto que mapee cada categoría con la suma acumulada de órdenes completadas. Ejemplo: `{ electronics: 300, clothing: 130, books: 90 }`.
4. **Clientes VIP (`vipCustomers`)**: Arreglo de strings con los nombres únicos de clientes cuyo gasto acumulado en órdenes completadas sea **mayor o igual a $150**. No debe contener nombres duplicados.

### Entrada de prueba:
```typescript
const sampleOrders: Order[] = [
  { id: "o-1", customer: "Sofia", category: "electronics", total: 300, status: "completed" },
  { id: "o-2", customer: "Carlos", category: "clothing", total: 80, status: "completed" },
  { id: "o-3", customer: "Sofia", category: "clothing", total: 50, status: "completed" },
  { id: "o-4", customer: "Marcos", category: "electronics", total: 500, status: "cancelled" },
  { id: "o-5", customer: "Carlos", category: "books", total: 90, status: "completed" },
  { id: "o-6", customer: "Lucia", category: "books", total: 40, status: "pending" },
];
```

### Salida esperada:
```json
{
  "totalRevenue": 520,
  "byCategory": {
    "electronics": 300,
    "clothing": 130,
    "books": 90
  },
  "vipCustomers": ["Sofia", "Carlos"]
}
```
