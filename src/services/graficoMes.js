import axios from 'axios'

export const getAbertasMes = async (ano, mes, diaInicial, diaFinal) => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/query/sql', 
    headers: {
      'Target-URL': 'http://179.127.13.245:8099',
    },
    data: {
      "sql": `select count(*) as qtd_empresas from statistical where inicio_atividades between '${ano}-${mes}-${diaInicial}' and '${ano}-${mes}-${diaFinal}'`
    }
  })
  .then(res => {
    return res.data.numDocsScanned
  })
  .catch(err => console.log(err))
}
