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


export const getFiltrosPorte = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
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
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
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
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
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
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
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
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
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
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
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

export const getAbertasMes = async (ano, mes, diaInicial, diaFinal) => {
  return await axios({
    method: 'POST', 
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
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

export const getDataInicial = async (classificacao, setor, porte, natureza, secao_atividade, descricao_atividade, municipio_empresa, ano) => {
  return await axios({
    method: 'POST', 
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
    },
      data: { "sql": `select ${classificacao}, count(*) from statistical where setor = ${setor} and porte = ${porte} and natureza = ${natureza} and secao_atividade = ${secao_atividade} and descricao_atividade = ${descricao_atividade} and municipio_empresa = ${municipio_empresa} inicio_atividades between '${ano}-01-01' and '${ano}-12-31' group by ${classificacao}`}
    })
    .then(res => {
      return res
    })
    .catch(err => console.log(err))
  }