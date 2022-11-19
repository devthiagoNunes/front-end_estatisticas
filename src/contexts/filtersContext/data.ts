const initial_date = new Date()

export type FilterStateProps = {
  empresasAbertas: boolean
  porte: string[]
  setor: string[]
  natureza: string[]
  descricao_atividade: string[]
  municipio_empresa: string[]
  secao_atividade: string[]
  mes: string[]
  ano: number
}

export const filtersState: FilterStateProps = {
  empresasAbertas: true,
  setor: [],
  porte: [],
  natureza: [],
  descricao_atividade: [],
  municipio_empresa: [],
  secao_atividade: [],
  mes: [],
  ano: (initial_date.getMonth() >= 1 && initial_date.getDate() >= 5) ? initial_date.getFullYear() : initial_date.getFullYear()-1
}