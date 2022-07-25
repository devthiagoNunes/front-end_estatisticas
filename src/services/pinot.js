import axios from 'axios'

const backend_endpoint = 'http://localhost:3333'

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