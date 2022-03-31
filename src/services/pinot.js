import axios from 'axios'

const backend_endpoint = 'http://localhost:3001';

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
    url: backend_endpoint + '/getPorte', 
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}

export const getFiltrosSetor = async () => {
  return await axios({
    method: 'GET', 
    url: backend_endpoint + '/getSetor', 
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}

export const getFiltrosNatureza = async () => {
  return await axios({
    method: 'GET', 
    url: backend_endpoint + '/getNatureza', 
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
    url: backend_endpoint + '/getMunicipios'
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}

export const getFiltrosSecaoAtividade = async () => {
  return await axios({
    method: 'GET', 
    url: backend_endpoint + '/getSecaoAtividade'
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}

export const getFiltrosDescricaoAtividade = async () => {
  return await axios({
    method: 'GET', 
    url: backend_endpoint + '/getDescricaoAtividade'
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}
