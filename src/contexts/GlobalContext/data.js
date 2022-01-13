var initial_date = new Date()
export const estadoGlobal = {
  empresasAbertas: true,
  setor: '' ,
  porte: '',
  natureza: '',
  descricao_atividade: '',
  municipio_empresa: '',
  secao_atividade: '',
  ano: initial_date.getMonth() >= 2 ? initial_date.getFullYear() : initial_date.getFullYear()-1, 
}