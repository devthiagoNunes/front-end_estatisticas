import axios from 'axios'

export const getAbertasPorte = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/query/sql', 
    headers: {
      'Target-URL': 'http://179.127.13.245:8099',
    },
    data: {
      "sql": "select porte, count(*) from statistical where inicio_atividades between '2021-01-01' and '2021-12-31' group by porte"
    }
  })
  .then(res => {
    return res.data.resultTable.rows;
  })
  .catch(err => console.log(err))
}

export const getAbertasSetor = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/query/sql', 
    headers: {
      'Target-URL': 'http://179.127.13.245:8099',
    },
    data: {
      "sql": "select setor, count(*) from statistical where inicio_atividades between '2021-01-01' and '2021-12-31' group by setor"
    }
  })
  .then(res => {
    return res.data.resultTable.rows;
  })
  .catch(err => console.log(err))
}