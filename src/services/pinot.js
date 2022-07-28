import axios from 'axios'

const backend_endpoint = process.env.REACT_APP_BACKEND

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