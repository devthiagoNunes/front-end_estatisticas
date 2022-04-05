import axios from 'axios'

const backend_endpoint = 'http://179.127.13.245:3333';

export const getDataEmpresasAbertas = async (filtros) => {
  return await axios({
    method: 'POST', 
    url: backend_endpoint + '/empresasAbertas', 
    data: filtros
  })
  .then(res => {
    return res.data;
  })
  .catch(err => err)
}

export const getDataEmpresasAtivas = async (filtros) => {
  return await axios({
    method: 'POST', 
    url: backend_endpoint + '/empresasAtivas', 
    data: filtros
  })
  .then(res => {
    return res.data;
  })
  .catch(err => err)
}

//Obtencao dos dados dos Filtros
export const getFiltrosPorte = async () => {
  return await axios({
    method: 'GET', 
    url: backend_endpoint + '/porte', 
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}

export const getFiltrosSetor = async () => {
  return await axios({
    method: 'GET', 
    url: backend_endpoint + '/setor', 
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}

export const getFiltrosNatureza = async () => {
  return await axios({
    method: 'GET', 
    url: backend_endpoint + '/natureza', 
  })
  .then(res => {
    console.log(res)
    return res.data.values;
  })
  .catch(err => err)
}

export const getFiltrosMunicipio = async () => {
  return await axios({
    method: 'GET', 
    url: backend_endpoint + '/municipios'
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}

export const getFiltrosSecaoAtividade = async () => {
  return await axios({
    method: 'GET', 
    url: backend_endpoint + '/secaoAtividade'
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}

export const getFiltrosDescricaoAtividade = async () => {
  return await axios({
    method: 'GET', 
    url: backend_endpoint + '/descricaoAtividade'
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}
