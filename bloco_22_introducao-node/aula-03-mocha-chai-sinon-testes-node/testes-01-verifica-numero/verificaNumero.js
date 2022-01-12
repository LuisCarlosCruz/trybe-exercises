const verificaNumero = (param) => {
  if (param > 0) return 'positivo';
  if (param < 0) return 'negativo';
  if (param === 0) return 'neutro';
  return 'o valor deve ser um número';
};

verificaNumero(2);

module.exports = { verificaNumero };