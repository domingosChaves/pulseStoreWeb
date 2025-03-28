export interface Produto {
  id: number; // `Long` do Java é representado como `number` em TypeScript
  nome: string;
  descricao: string;
  preco: number; // `BigDecimal` do Java pode ser representado como `number`
  estoque: number; // `int` do Java é representado como `number` em TypeScript
  codigoBarras: string;
  unidadeMedida: string;
  categoria: string;
  ncm: string; // Código NCM
  cst: string; // Código da Situação Tributária
  pis: number; // Percentual de PIS
  cofins: number; // Percentual de COFINS
  icms: number; // Percentual de ICMS
  criadoEm: string; // `LocalDateTime` é geralmente tratado como string em JSON
  atualizadoEm: string; // `LocalDateTime` é geralmente tratado como string em JSON
}