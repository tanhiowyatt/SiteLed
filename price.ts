export const PRODUCT_PRICE = 1290;

export function formatPrice(amount: number): string {
  return `${amount.toLocaleString("ru-RU")} ₽`;
}
