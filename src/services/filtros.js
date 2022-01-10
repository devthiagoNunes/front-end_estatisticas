import axios from 'axios'

export const getFiltrosPorte = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/query/sql', 
    headers: {
      'Target-URL': 'http://179.127.13.245:8099',
    },
    data: {
      "sql": "select distinct porte from statistical"
    }
  })
  .then(res => {
    return res.data.resultTable.rows;
  })
  .catch(err => console.log(err))
}

export const getFiltrosSetor = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/query/sql', 
    headers: {
      'Target-URL': 'http://179.127.13.245:8099',
    },
    data: {
      "sql": "select distinct setor from statistical where setor != 'null'"
    }
  })
  .then(res => {
    return res.data.resultTable.rows;
  })
  .catch(err => console.log(err))
}

export const getFiltrosNatureza = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/query/sql', 
    headers: {
      'Target-URL': 'http://179.127.13.245:8099',
    },
    data: {
      "sql": "select distinct natureza from statistical limit 50"
    }
  })
  .then(res => {
    return res.data.resultTable.rows;
  })
  .catch(err => console.log(err))
}

export const getFiltrosMunicipio = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/query/sql', 
    headers: {
      'Target-URL': 'http://179.127.13.245:8099',
    },
    data: {
      "sql": "select distinct municipio_empresa from statistical limit 1420"
    }
  })
  .then(res => {
    return res.data.resultTable.rows;
  })
  .catch(err => console.log(err))
}

export const getFiltrosSecaoAtividade = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/query/sql', 
    headers: {
      'Target-URL': 'http://179.127.13.245:8099',
    },
    data: {
      "sql": "select distinct secao_atividade secao_atividade from statistical where secao_atividade != 'null' limit 50"
    }
  })
  .then(res => {
    return res.data.resultTable.rows;
  })
  .catch(err => console.log(err))
}

export const getFiltrosDescricaoAtividade = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/query/sql', 
    headers: {
      'Target-URL': 'http://179.127.13.245:8099',
    },
    data: {
      "sql": "select distinct descricao_atividade from statistical limit 1500"
    }
  })
  .then(res => {
    return res.data.resultTable.rows;
  })
  .catch(err => console.log(err))
}
