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
      break
    default:
      apelido_tabela = `empresas_abertas`
      orderBy = `order by ${apelido_tabela} desc`
      break
  }

  let query = `select ${classificacao}, count(*) ${apelido_tabela} from statistical `
  let otherFilters = ''
  let filters = ' where '
  let allFilters = []

  for (const key in filtros.state) {
    if(filtros.state[key] == 'Selecionar') filtros.state[key] = ''
    
    if(key !== 'empresasAbertas' && filtros.state[key] !== ''){
      
      switch (key) {
        case 'ano':
          if(filtros.state[key].length > 1){
            allFilters.push(filtros.state[key])

            filtros.state[key].map((element, index) => {
              index !== 0 ? otherFilters += ` or inicio_atividades between '${element.Country}-01-01' and '${element.Country}-12-31' ${index == filtros.state[key].length - 1 ? ')' : ''}`
               : otherFilters += `(inicio_atividades between '${element.Country}-01-01' and '${element.Country}-12-31'  `
            })
            filters = 'where ' + otherFilters +  `group by ${classificacao} ${orderBy} limit 700000`
            break
          } else {
            filters += `inicio_atividades between '${filtros.state[key]}-01-01' and '${filtros.state[key]}-12-31' group by ${classificacao} ${orderBy} limit 700000`
            break
          }
        default:
          if(typeof filtros.state[key] == 'object' &&   filtros.state[key].length > 1){
            allFilters.push(filtros.state[key])

            filtros.state[key].map((element, index) => {
              index !== 0 ? otherFilters += `or ${key} = '${element.Country}' ${index == filtros.state[key].length - 1 ? ') and ' : ''}` : otherFilters += `(${key} = '${element.Country}' `
            })
            filters = 'where ' + otherFilters
            break
          } else {
            filters += `${key} = '${filtros.state[key]}' and `
            break
          }
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
  let otherFiltersEmpresasAtivas = ''
  let allFiltersEmpresasAtivas = []

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
      break
    default:
      apelido_tabela = `empresas_ativas`
      orderBy = `order by ${apelido_tabela} desc`
      break
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
          if(typeof filtros.state[key] == 'object' &&   filtros.state[key].length > 1){
            allFiltersEmpresasAtivas.push(filtros.state[key])

            filtros.state[key].map((element, index) => {
              index !== 0 ? otherFiltersEmpresasAtivas += `or ${key} = '${element.Country}' ${index == filtros.state[key].length - 1 ? ') and ' : ''}` : otherFiltersEmpresasAtivas += `(${key} = '${element.Country}' `
            })
            filters = 'where ' + otherFiltersEmpresasAtivas
            break
          } else {
            filters += `${key} = '${filtros.state[key]}' and `
            break
          }
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

export const getAbertasMes = async (ano, mes, diaInicial, diaFinal, filtros) => {
  if(filtros == undefined || filtros == null || filtros.state == undefined || filtros.state == null)
  return []

  let query = `select count(*) from statistical `
  let filters = ' where '

  let arrDatasFIlters = []

  for (const key in filtros.state) {
    if(filtros.state[key] == 'Selecionar') filtros.state[key] = ''
    if(filtros.state[key] !== '') arrDatasFIlters.push(filtros.state[key])
    
    if(key !== 'empresasAbertas' && filtros.state[key] !== ''){
      switch (key) {
        case 'ano':
          filters += `inicio_atividades between '${ano}-${mes}-${diaInicial}' and '${ano}-${mes}-${diaFinal}'`
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
      "sql": query+filters
    }
  })
  .then(res => {
    return res.data.numDocsScanned
  })
  .catch(err => err)
}

export const getAbertasAnual = async (classificacao, filtros) => {allFiltersMensal
  if(filtros == undefined || filtros == null || filtros.state == undefined || filtros.state == null)
  return []

  const apelido_coluna_1 = 'natureza_empresa'
  const apelido_coluna_2 = 'municipio'
  const apelido_coluna_3 = 'atividade'
  let apelido_tabela = ''
  let orderBy = ''
  let allFiltersAnual = []
  let otherFiltersAnual = ''

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
      break
    default:
      apelido_tabela = `empresas_ativas`
      orderBy = `order by ${apelido_tabela} desc`
      break
  }

  let query = `select  count(*) from statistical `
  let filters = ' where '
  const initial_date = new Date()
  const date = initial_date.getMonth() >= 2 ? initial_date.getFullYear() : initial_date.getFullYear()-1

  for (const key in filtros.state) {
    
    if(filtros.state[key] == 'Selecionar') filtros.state[key] = ''
    if(filtros.state[key] == 'ano' && filtros.state[key] == '' ) filtros.state[key] += date

    if(key !== 'empresasAbertas' && filtros.state[key] !== ''){
      switch (key) {
        case 'ano':
          if(filtros.state[key].length > 1){
            allFiltersAnual.push(filtros.state[key])

            filtros.state[key].map((element, index) => {
              index !== 0 ? otherFiltersAnual += ` or inicio_atividades between '${element.Country}-01-01' and '${element.Country}-12-31'` : otherFiltersAnual += `(inicio_atividades between '${element.Country}-01-01' and '${element.Country}-12-31'`
            })
            filters += `${otherFiltersAnual})` + ' limit 700000'
            break 
          } else { 
            filters += `inicio_atividades between '${filtros.state[key]}-01-01' and '${filtros.state[key]}-12-31' limit 700000`
            break
          }
        default:
          if(typeof filtros.state[key] == 'object' &&   filtros.state[key].length > 1){
            allFiltersAnual.push(filtros.state[key])

            filtros.state[key].map((element, index) => {
              index !== 0 ? otherFiltersAnual += ` or ${key} = '${element.Country}' ${index == filtros.state[key].length - 1 ? ') and ' : ''} ` : otherFiltersAnual += `(${key} = '${element.Country}' `
            })
            filters = 'where ' + otherFiltersAnual
            break
          } else {
            filters += `${key} = '${filtros.state[key]}' and `
            break
          }
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
    return res.data.numDocsScanned
  })
  .catch(err => err)
}