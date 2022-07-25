import axios from 'axios'

const backend_endpoint = 'http://localhost:3333'

export const getCapitalSocial = async (context, endPoint) => {
  return await axios({
    method: 'POST',
    data: {
      ...context.state
    },
    url: `${backend_endpoint}/estatisticas${endPoint}`,
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}

export const getFilter = async (context, endPoint) => {
  return await axios({
    method: 'POST',
    data: {
      ...context.state
    },
    url: `${backend_endpoint}/estatisticas${endPoint}`,
  })
  .then(res => {
    return res.data.values;
  })
  .catch(err => err)
}

export const getDatasOfChartsAndFilters = async (contextFilters) => {
  return await axios({
    method: 'POST',
    data: contextFilters,
    url: `${backend_endpoint}/estatisticas/datas/all`,
  })
  .then(res => {
    return res
  })
  .catch(err => err)
}