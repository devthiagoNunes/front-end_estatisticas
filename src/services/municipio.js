import axios from 'axios'

export const getAbertasPorMunicipio = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
    },
      data: { "sql": 'select distinct municipio_empresa from statistical limit 1500'}
    })
    .then(res => {
      return res.data.resultTable.rows
    })
    .catch(err => console.log(err))
}

export const getQuantidadeAbertasPorMunicipio = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
    },
      data: { "sql": `select municipio_empresa, count(*) from statistical where inicio_atividades between '2021-01-01' and '2021-12-31' group by municipio_empresa  limit 600000`}
    })
    .then(res => {
      return res.data.resultTable
    })
    .catch(err => console.log(err))
}  

export const getAbertasAnual = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
    },
      data: { "sql": `select count(*) from statistical where inicio_atividades between  '2021-01-01' and '2021-12-31'`}
    })
    .then(res => {
      return res.data.numDocsScanned
    })
    .catch(err => console.log(err))
}