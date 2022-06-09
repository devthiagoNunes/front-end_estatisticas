import axios from 'axios'

const backend_endpoint = process.env.REACT_APP_BACKEND;

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

export const getFilter = async (context, endPoint) => {
  return await axios({
    method: 'POST',
    data: {
      ...context.state
    },
    url: `${backend_endpoint}${endPoint}`,
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}
