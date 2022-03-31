import currency from 'currency.js';
export function maskValue(value: string) {
  value = value.replace(/\D/g, '');
  if (value.length >= 6) {
    value = value.replace(/(\d*)(\d{3})(\d{2})/g, '$1.$2,$3');
  } else {
    value = value.replace(/(\d*)(\d{2}$)/g, '$1,$2');
  }
  return {
    text: `R$ ${value}`,
    value: value,
  };
}

export function maskCep(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  return value;
}

export function maskPhone(value: string) {
  value = value.replace(/\D/g, '');
  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else {
    value = value.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  return value;
}

export function maskDate(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{2})(\d{2})/, '$1/$2/$3');
  return value;
}

export function maskDocument(value: string) {
  value = value.replace(/\D/g, '');
  if (value.length <= 11) {
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  } else {
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
  return value;
}

export function maskCardNumber(value: string) {
  value = value.replace(/\D/g, '');
  if (value.length > 5) {
    value = value.replace(/^(\d{4})(\d{4})/, '$1 $2');
  } else if (value.length > 10) {
    value = value.replace(/^(\d{4})(\d{4})(\d{4})/, '$1 $2 $3');
  } else if (value.length > 15) {
    value = value.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
  }
  return value;
}

export function maskValidTrhu(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{2})/, '$1/$2');
  return value;
}

export function maskValueCurrency(value: number) {
  const newValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    currency(value, { fromCents: true }).value,
  );
  return newValue;
}
export function maskValueCurrencyInt(value: number) {
  const newValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );
  return newValue;
}
