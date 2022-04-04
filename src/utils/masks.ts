export function maskDate(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{2})(\d{2})/, '$1/$2/$3');
  return value;
}
