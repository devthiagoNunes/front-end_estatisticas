import axios from 'axios'

export const getAbertas = async (classificacao, ano) => {
  return await axios({
    method: 'POST', 
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
    },
    data: {
      "sql": `select ${classificacao}, count(*) from statistical where inicio_atividades between '${ano}-01-01' and '${ano}-12-31' group by ${classificacao}`
    }
  })
  .then(res => {
    return res.data.resultTable.rows;
  })
  .catch(err => console.log(err))
}
