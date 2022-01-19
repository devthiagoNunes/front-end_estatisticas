import axios from 'axios'

export const getAbertas = async (classificacao, filtros) => {
  if(filtros == undefined || filtros == null || filtros.state == undefined || filtros.state == null)
  return []

  const apelido_coluna_1 = 'natureza_empresa'
  const apelido_coluna_2 = 'municipio'
  let apelido_tabela = ''
  let orderBy = ''

  switch (classificacao) {
    case 'natureza':
      apelido_tabela = `as ${apelido_coluna_1}`
      orderBy = `order by ${apelido_coluna_1} desc`
      break
    case 'municipio_empresa':
      apelido_tabela = `as ${apelido_coluna_2}`
      orderBy = `order by ${apelido_coluna_2} desc`
      break;
  }

  let query = `select ${classificacao}, count(*) ${apelido_tabela} from statistical `
  let filters = ' where '

  for (const key in filtros.state) {

    if(filtros.state[key] == 'Selecionar') filtros.state[key] = ''
    
    if(key !== 'empresasAbertas' && filtros.state[key] !== ''){
      switch (key) {
        case 'ano':
          filters += `inicio_atividades between '${filtros.state[key]}-01-01' and '${filtros.state[key]}-12-31' group by ${classificacao} ${orderBy} limit 700000`
          break;
        default:
          filters += `${key} = '${filtros.state[key]}' and `
          break
      }
    }
  }

  return await axios({
    method: 'POST', 
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
    },
    data: {
      "sql": query + filters
    }
  })
  .then(res => {
    return res.data.resultTable.rows
  })
  .catch(err => err)
}

export const getDataEmpresasAtivas = async (classificacao, filtros) => {
  if(filtros == undefined || filtros == null || filtros.state == undefined || filtros.state == null)
    return []

  const apelido_coluna_1 = 'natureza_empresa'
  const apelido_coluna_2 = 'municipio'
  const apelido_coluna_3 = 'atividade'
  let apelido_tabela = ''
  let orderBy = ''

  switch (classificacao) {
    case 'natureza':
      apelido_tabela = `as ${apelido_coluna_1}`
      orderBy = `order by ${apelido_coluna_1} desc`
      break
    case 'municipio_empresa':
      apelido_tabela = `as ${apelido_coluna_2}`
      orderBy = `order by ${apelido_coluna_2} desc`
      break
    case 'secao_atividade':
      apelido_tabela = `as ${apelido_coluna_3}`
      orderBy = `order by ${apelido_coluna_3} desc`
      break;
  }

  let query = `select ${classificacao}, count(*) ${apelido_tabela} from statistical `
  let filters = ' where '
  const initial_date = new Date()
  const date = initial_date.getMonth() >= 2 ? initial_date.getFullYear() : initial_date.getFullYear()-1

  for (const key in filtros.state) {
    
    if(filtros.state[key] == 'Selecionar') filtros.state[key] = ''
    if(filtros.state[key] == 'ano' && filtros.state[key] == '' ) filtros.state[key] += date

    if(key !== 'empresasAbertas' && filtros.state[key] !== ''){
      switch (key) {
        case 'ano':
          filters += `situacao_siarco = 'REGISTRO ATIVO' and ${classificacao} != 'null' group by ${classificacao} ${orderBy} limit 700000`
          break
        default:
          filters += `${key} = '${filtros.state[key]}' and `
          break
      }
    }
  }

  return await axios({
    method: 'POST', 
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
    },
    data: {
      "sql": query + filters
    }
  })
  .then(res => {
    return res.data
  })
  .catch(err => err)
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
    return res.data.resultTable.rows
  })
  .catch(err => err)
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
    return res.data.resultTable.rows
  })
  .catch(err => err)
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
    return res.data.resultTable.rows
  })
  .catch(err => err)
}

export const getFiltrosMunicipio = async () => {
  return await axios({
    method: 'POST', 
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
    },
    data: {
      "sql": "select distinct municipio_empresa from statistical order by municipio_empresa limit 1420"
    }
  })
  .then(res => {
    return res.data.resultTable.rows
  })
  .catch(err => err)
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
    return res.data.resultTable.rows
  })
  .catch(err => err)
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
    return res.data.resultTable.rows
  })
  .catch(err => err)
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
  .catch(err => err)
}


export const getAbertasAnual = async (ano) => {
  return await axios({
    method: 'POST', 
    url: 'http://179.127.13.245:3000/query/sql', 
    headers: {
      'Target-URL': 'http://pinot-broker:8099',
    },
      data: { "sql": `select count(*) from statistical where inicio_atividades between  '${ano}-01-01' and '${ano}-12-31'`}
    })
    .then(res => {
      return res.data.numDocsScanned
    })
    .catch(err => err)
}
